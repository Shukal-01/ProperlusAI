import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const FloatingCTA = () => {
  return (
  //   <div className="floating-cta animate-float  ">
  //     <Button
  //       asChild
  //       size="lg"
  //       className="rounded-full shadow-lg hover-glow h-14 w-14 md:h-auto md:w-auto"
  //     >
  //       <Link to="/contact" className="flex items-center space-x-2">
  //         <MessageCircle className="w-5 h-5" />
  //         <span className="hidden md:inline">Book Consultation</span>
  //       </Link>
  //     </Button>
  //   </div>
  <div className="fixed bottom-2.5 right-4 animate-float">
  <Button
    asChild
    size="lg"
    className="rounded-full shadow-lg hover-glow h-15 w-14 md:h-auto md:w-auto"
  >
    <Link to="/contact" className="flex items-center space-x-2">
      <MessageCircle className="w-5 h-5" />
      <span className="hidden md:inline">Book Consultation</span>
    </Link>
  </Button>
</div>
  );
};

export default FloatingCTA;
