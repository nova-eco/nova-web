import SalonCardHeaderImageFallback from '@app/components/SalonCardHeaderImageFallback';
import { getImageToDisplay } from './getImageToDisplay';
import * as styles from './SalonCardHeaderImage.module.css';
import type { SalonCardHeaderImageProps } from './SalonCardHeaderImageProps';

/**
 * SalonCardHeaderImage component displays a salon image in a circular container.
 *
 * The component prioritizes external images, then internal images, then maps, and finally
 * displays a fallback with the salon's first initial if no valid images are available.
 *
 * @param   {SalonCardHeaderImageProps}  props                  - The component props
 *
 * @param   {Location}                   props.location         - REQUIRED: Location object containing address and map reference
 * @param   {Map[]}                      props.maps             - REQUIRED: Array of map objects for fallback display
 * @param   {SalonImage[]}               props.salonImages      - REQUIRED: Array of salon images to display
 * @param   {SalonImageType[]}           props.salonImageTypes  - REQUIRED: Array of image type definitions
 * @param   {string}                     props.salonName        - REQUIRED: Name of the salon for alt text and fallback
 * @param   {UserInterfaceTheme}         [props.theme]          - OPTIONAL: Theme (light/dark) for styling
 *
 * @returns {JSX.Element}                                       The rendered salon card image component
 */
export const SalonCardHeaderImage = ({
  location,
  maps,
  salonImages,
  salonImageTypes,
  salonName,
  theme,
}: SalonCardHeaderImageProps) => {
  const imageUrl = getImageToDisplay(salonImages, salonImageTypes, maps, location);

  return (
    <div className={styles.imageContainer} data-theme={theme}>
      {imageUrl ? (
        <img src={imageUrl} alt={salonName} className={styles.image} />
      ) : (
        <SalonCardHeaderImageFallback salonName={salonName} />
      )}
    </div>
  );
};
