import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { base44 } from "@/api/base44Client";
import NavMenu from "@/components/marketplace/NavMenu";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Settings() {
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    setDeleting(true);
    await base44.auth.logout("/");
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Settings — Cadu</title>
      </Helmet>

      <header className="border-b border-border px-6 py-5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link to={createPageUrl("Home")}>
            <span className="text-2xl font-light tracking-tight text-primary" style={{ fontFamily: "Georgia, serif" }}>cadu</span>
          </Link>
          <NavMenu />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <h1 className="text-3xl font-normal text-foreground" style={{ fontFamily: "Georgia, serif" }}>Settings</h1>

        <section className="border border-destructive/30 rounded-xl p-6 space-y-4">
          <h2 className="text-lg font-semibold text-destructive">Danger Zone</h2>
          <p className="text-sm text-muted-foreground">
            Deleting your account will permanently remove all your data, saved preferences, and financing history. This cannot be undone.
          </p>

          {!confirming ? (
            <Button
              variant="outline"
              className="border-destructive text-destructive hover:bg-destructive hover:text-white h-11"
              onClick={() => setConfirming(true)}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete My Account
            </Button>
          ) : (
            <div className="space-y-3">
              <p className="text-sm font-medium text-destructive">Are you sure? This action is permanent and cannot be undone.</p>
              <div className="flex gap-3">
                <Button
                  variant="destructive"
                  className="h-11"
                  disabled={deleting}
                  onClick={handleDelete}
                >
                  {deleting ? "Deleting…" : "Yes, delete my account"}
                </Button>
                <Button variant="outline" className="h-11" onClick={() => setConfirming(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}