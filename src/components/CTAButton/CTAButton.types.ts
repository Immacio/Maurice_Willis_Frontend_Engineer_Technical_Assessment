export interface ICTAButtonProps {
  buttonText: string;
  to?: string;
  fill?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  onBack?: () => void;
  invert?: true;
}
