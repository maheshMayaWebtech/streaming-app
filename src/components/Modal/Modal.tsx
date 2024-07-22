import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import styles from  './Modal.module.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[600px]" style={{backgroundColor: 'black', color: 'white', zIndex: '99999', width: '90vw'}}>
        <DialogHeader>
          <DialogTitle>Sci-Fi Short Film “FTL" | DUST</DialogTitle>
          <DialogDescription>
            <iframe
              width="100"
              height="100"
              src="https://www.youtube.com/embed/t8LD0iUYv80?si=_IxlqbR2u_CIe1WQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
