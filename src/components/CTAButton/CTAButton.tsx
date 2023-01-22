import classnames from 'classnames';
import { memo } from 'react';
import { ClipLoader } from 'react-spinners';
import { ICTAButtonProps } from './CTAButton.types';
import styles from './styles.module.scss';

const CTAButton = memo<ICTAButtonProps>(
  ({ buttonText, onClick, fill, disabled, isLoading, className, type, invert }) => (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
      style={fill || disabled ? { backgroundColor: '#d7d7d7' } : { backgroundColor: '#d31145' }}
      className={classnames([
        { [styles.container]: true },
        { [`${className}`]: className },
        { [styles.modInvert]: invert },
      ])}
    >
      {isLoading ? (
        <div className={styles.clipLoader}>
          <ClipLoader size={14} color="fff" />
        </div>
      ) : (
        <span className={styles.label}>{buttonText}</span>
      )}
    </button>
  ),
);

CTAButton.displayName = 'CTAButton';

export default CTAButton;
