import SalonCardHeaderImage from '@app/components/SalonCardHeaderImage';
import * as styles from './SalonCardHeader.module.css';
import type { SalonCardHeaderProps } from './SalonCardHeaderProps';

/**
 * SalonCardHeader component displays a salon name as a heading with an associated image.
 *
 * The component renders the salon name as an H3 heading above a SalonCardHeaderImage component,
 * which displays either an external image, internal image, map, or fallback initial.
 *
 * @param   {SalonCardHeaderProps}  props                  - The component props
 *
 * @param   {Location}              props.location         - REQUIRED: Location object containing address and map reference
 * @param   {Map[]}                 props.maps             - REQUIRED: Array of map objects for fallback display
 * @param   {SalonImage[]}          props.salonImages      - REQUIRED: Array of salon images to display
 * @param   {SalonImageType[]}      props.salonImageTypes  - REQUIRED: Array of image type definitions
 * @param   {string}                props.salonName        - REQUIRED: Name of the salon to display as heading
 * @param   {UserInterfaceTheme}    [props.theme]          - OPTIONAL: Theme (light/dark) for styling
 *
 * @returns {JSX.Element}                                  The rendered salon card header component
 */
export const SalonCardHeader = ({
  location,
  salonImages,
  salonImageTypes,
  maps,
  salonName,
  theme,
}: SalonCardHeaderProps) => {
  return (
    <div
      className={theme ? `${styles.container} ${styles[theme]}` : styles.container}
      data-theme={theme}
    >
      <h3 className={styles.heading}>{salonName}</h3>
      <SalonCardHeaderImage
        location={location}
        maps={maps}
        salonImages={salonImages}
        salonImageTypes={salonImageTypes}
        salonName={salonName}
        theme={theme}
      />
    </div>
  );
};
