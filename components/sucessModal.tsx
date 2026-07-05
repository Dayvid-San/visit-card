import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-sm scale-in-center rounded-xl border bg-card p-8 shadow-2xl transition-all">
        <div className="flex flex-col items-center text-center">
          {/* Icon Section */}
          <div className="mb-4 rounded-full bg-green-500/10 p-3">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>

          {/* Text Section */}
          <h2 className="mb-2 text-2xl font-bold tracking-tight">
            Mensagem Enviada!
          </h2>
          <p className="mb-8 text-muted-foreground">
            Obrigado pelo contato. Recebi sua mensagem e responderei o mais breve possível.
          </p>

          {/* Action */}
          <Button onClick={onClose} className="w-full" size="lg">
            Fechar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;