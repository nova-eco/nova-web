import Link from '@app/components/Link';
import * as styles from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <div className={`sidebar ${styles.sidebar}`}>
      <Link label="Home" route="/home" />
      <Link label="Admin" route="/admin" />
      <Link label="Booking" route="/booking/pathway" />
    </div>
  );
};
