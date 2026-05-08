import { useState, useRef } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Upload, Camera, Loader2, AlertTriangle, FileImage, X, Receipt, BookOpen, ShieldCheck, Search, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function ExplainMyBill() {
  const [image, setImage] = useState(null); // { file, previewUrl }
  const [explanation, setExplanation] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    setExplanation(null);
    setImage({ file, previewUrl: URL.createObjectURL(file) });
  };

  const clearImage = () => {
    setImage(null);
    setExplanation(null);
  };

  const analyze = async () => {
    if (!image) return;
    setLoading(true);

    const { file_url } = await base44.integrations.Core.UploadFile({ file: image.file });

    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `You are a medical billing specialist helping a patient understand their medical bill.
Analyze the attached medical bill image and return a JSON object with exactly these keys:
- "charges": array of objects with "name" (string), "amount" (string, the dollar amount shown on the bill if visible, otherwise empty string), and "explanation" (string) for each line item/charge
- "abbreviations": array of objects with "term" (string) and "meaning" (string) for any abbreviations or codes found (empty array if none)
- "owed": string summarizing what the patient likely owes vs. what insurance may cover (2-3 sentences)
- "flagged": array of strings listing any charges that look unusual or worth questioning (empty array if none)
- "next_steps": array of strings with 2-4 actionable next steps for the patient

Be concise and use simple language a non-expert can understand.`,
      file_urls: [file_url],
      response_json_schema: {
        type: "object",
        properties: {
          charges: { type: "array", items: { type: "object", properties: { name: { type: "string" }, amount: { type: "string" }, explanation: { type: "string" } } } },
          abbreviations: { type: "array", items: { type: "object", properties: { term: { type: "string" }, meaning: { type: "string" } } } },
          owed: { type: "string" },
          flagged: { type: "array", items: { type: "string" } },
          next_steps: { type: "array", items: { type: "string" } },
        }
      }
    });

    setExplanation(result);
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-1">Explain My Bill</h2>
        <p className="text-sm text-muted-foreground">
          Upload a photo of your medical bill and we'll break down every charge in simple, clear language.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="flex gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
        <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <p>
          <strong>Disclaimer:</strong> This tool provides general educational explanations only and is not financial, legal, or medical advice. Always verify charges directly with your provider or insurer. Do not upload bills containing sensitive information you're not comfortable sharing.
        </p>
      </div>

      {/* Upload Area */}
      {!image ? (
        <div className="border-2 border-dashed border-border rounded-xl p-10 text-center space-y-4">
          <FileImage className="w-10 h-10 mx-auto text-muted-foreground/40" />
          <div>
            <p className="font-medium text-foreground mb-1">Upload your medical bill</p>
            <p className="text-xs text-muted-foreground">JPG, PNG, or PDF image</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
              <Upload className="w-4 h-4 mr-2" />
              Choose File
            </Button>
            <Button variant="outline" className="md:hidden" onClick={() => cameraInputRef.current?.click()}>
              <Camera className="w-4 h-4 mr-2" />
              Take Photo
            </Button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFile(e.target.files[0])}
          />
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={(e) => handleFile(e.target.files[0])}
          />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative">
            <img
              src={image.previewUrl}
              alt="Uploaded bill"
              className="max-h-64 rounded-xl border border-border object-contain w-full"
            />
            <button
              onClick={clearImage}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow border border-border hover:bg-secondary transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
          {!explanation && (
            <Button onClick={analyze} disabled={loading} className="w-full">
              {loading ? (
                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Analyzing…</>
              ) : (
                "Explain This Bill"
              )}
            </Button>
          )}
        </div>
      )}

      {/* Explanation */}
      {explanation && (
        <div className="space-y-4">

          {/* Charges */}
          {explanation.charges?.length > 0 && (
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-primary/5 border-b border-border">
                <Receipt className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-foreground text-sm">Charges Breakdown</h3>
              </div>
              <div className="divide-y divide-border">
                {explanation.charges.map((c, i) => (
                  <div key={i} className="px-4 py-3 flex gap-3 justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-foreground">{c.name}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{c.explanation}</p>
                    </div>
                    {c.amount && (
                      <span className="font-semibold text-sm text-foreground flex-shrink-0 mt-0.5">{c.amount}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What You Owe */}
          {explanation.owed && (
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <h3 className="font-semibold text-sm text-blue-900">What You May Owe</h3>
              </div>
              <p className="text-sm text-blue-800">{explanation.owed}</p>
            </div>
          )}

          {/* Abbreviations */}
          {explanation.abbreviations?.length > 0 && (
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-primary/5 border-b border-border">
                <BookOpen className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-foreground text-sm">Terms & Abbreviations</h3>
              </div>
              <div className="divide-y divide-border">
                {explanation.abbreviations.map((a, i) => (
                  <div key={i} className="px-4 py-3 flex gap-3">
                    <span className="font-mono font-semibold text-xs bg-secondary px-2 py-1 rounded text-foreground h-fit mt-0.5 flex-shrink-0">{a.term}</span>
                    <p className="text-sm text-muted-foreground">{a.meaning}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Flagged Charges */}
          {explanation.flagged?.length > 0 && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Search className="w-4 h-4 text-amber-600" />
                <h3 className="font-semibold text-sm text-amber-900">Worth Questioning</h3>
              </div>
              <ul className="space-y-1.5">
                {explanation.flagged.map((f, i) => (
                  <li key={i} className="text-sm text-amber-800 flex gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Next Steps */}
          {explanation.next_steps?.length > 0 && (
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-primary/5 border-b border-border">
                <ArrowRight className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-foreground text-sm">Suggested Next Steps</h3>
              </div>
              <div className="divide-y divide-border">
                {explanation.next_steps.map((s, i) => (
                  <div key={i} className="px-4 py-3 flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <p className="text-sm text-foreground">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cadu CTA */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground">Need help covering this bill?</p>
                <p className="text-xs text-muted-foreground mt-0.5">Compare healthcare financing options matched to your profile — no credit impact.</p>
              </div>
            </div>
            <Link to={createPageUrl("Onboarding")} className="flex-shrink-0">
              <Button size="sm" className="whitespace-nowrap">
                Find My Options <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </div>

          <Button variant="outline" size="sm" onClick={clearImage}>
            Upload a Different Bill
          </Button>
          <p className="text-xs text-muted-foreground">
            This explanation is AI-generated for informational purposes only. Cadu is not a medical billing service or financial advisor. Always confirm details with your healthcare provider or insurer.
          </p>
        </div>
      )}
    </div>
  );
}