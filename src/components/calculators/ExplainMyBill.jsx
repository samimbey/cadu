import { useState, useRef } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Upload, Camera, Loader2, AlertTriangle, FileImage, X } from "lucide-react";

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
Analyze the attached medical bill image and provide a clear, plain-English explanation covering:
1. What each charge/line item means
2. Common abbreviations decoded
3. What the patient likely owes vs. what insurance covers (if visible)
4. Any charges that look unusual or worth questioning
5. Suggested next steps

Be concise and use simple language. Format with clear sections.`,
      file_urls: [file_url],
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
          <div className="relative inline-block">
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
            <Button onClick={analyze} disabled={loading} className="w-full sm:w-auto">
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
        <div className="space-y-3">
          <div className="p-5 bg-secondary rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">Bill Explanation</h3>
            <div className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{explanation}</div>
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