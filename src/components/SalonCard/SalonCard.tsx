import Card from '@app/components/Card';
import CardButton from '@app/components/CardButton';
import SalonCardBody from '@app/components/SalonCardBody';
import SalonCardHeader from '@app/components/SalonCardHeader';
import * as styles from './SalonCard.module.css';
import type { SalonCardProps } from './SalonCardProps';

/**
 * SalonCard component displays a complete salon card with header, body, and selection button.
 *
 * The component renders a salon's information within a Card container, including the salon header
 * (name and image), body (summary/description), and a selection button. It finds the appropriate
 * location from the locations array using the salon's locationId.
 *
 * @param   {SalonCardProps}                props                  - The component props
 *
 * @param   {Location[]}                    props.locations        - REQUIRED: Array of location objects
 * @param   {Map[]}                         props.maps             - REQUIRED: Array of map objects
 * @param   {Salon}                         props.salon            - REQUIRED: Salon object to display
 * @param   {SalonImage[]}                  props.salonImages      - REQUIRED: Array of salon images
 * @param   {SalonImageType[]}              props.salonImageTypes  - REQUIRED: Array of salon image types
 * @param   {(salonId: string) => void}     props.setSalonId       - REQUIRED: Function to call when Select button is clicked
 * @param   {UserInterfaceTheme}            [props.theme]          - OPTIONAL: Theme (light/dark) for styling
 *
 * @returns {JSX.Element}                                          The rendered salon card component
 */
export const SalonCard = ({
  locations,
  maps,
  salon,
  salonImages,
  salonImageTypes,
  setSalonId,
  theme,
}: SalonCardProps) => {
  const location = locations.find((loc) => loc.id === salon.locationId);

  const handleSelectClick = (salonId: string) => {
    setSalonId(salonId);
  };

  if (!location) {
    return null;
  }

  return (
    <Card>
      <div
        className={theme ? `${styles.container} ${styles[theme]}` : styles.container}
        data-theme={theme}
      >
        <SalonCardHeader
          location={location}
          maps={maps}
          salonImages={salonImages}
          salonImageTypes={salonImageTypes}
          salonName={salon.name}
          theme={theme}
        />
        <SalonCardBody salon={salon} theme={theme} />
        <CardButton
          label="Select"
          onClick={() => handleSelectClick(salon.id)}
          theme={theme}
        />
      </div>
    </Card>
  );
};
