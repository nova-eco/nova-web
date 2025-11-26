import Card from '@app/components/Card';
/*
import CardButton from '@app/components/CardButton';
import ServiceCardBody from '@app/components/ServiceCardBody';
import ServiceCardHeader from '@app/components/ServiceCardHeader';
*/
import * as styles from './ServiceCard.module.css';
import type { ServiceCardProps } from './ServiceCardProps';

/**
 * ServiceCard component displays a complete service card with header, body, and selection button.
 *
 * The component renders a service's information within a Card container, including the service header
 * (name and image), body (summary/description), and a selection button. It finds the appropriate
 * location from the locations array using the service's locationId.
 *
 * @param   {ServiceCardProps}                props                  - The component props
 *
 * @param   {Location[]}                    props.locations        - REQUIRED: Array of location objects
 * @param   {Map[]}                         props.maps             - REQUIRED: Array of map objects
 * @param   {Service}                         props.service            - REQUIRED: Service object to display
 * @param   {ServiceImage[]}                  props.serviceImages      - REQUIRED: Array of service images
 * @param   {ServiceImageType[]}              props.serviceImageTypes  - REQUIRED: Array of service image types
 * @param   {(serviceId: string) => void}     props.setServiceId       - REQUIRED: Function to call when Select button is clicked
 * @param   {UserInterfaceTheme}            [props.theme]          - OPTIONAL: Theme (light/dark) for styling
 *
 * @returns {JSX.Element}                                          The rendered service card component
 */
export const ServiceCard = ({
  service,
  serviceImages,
  setServiceId,
  theme,
}: ServiceCardProps) => {
  const handleSelectClick = () => {
    setServiceId(service.id);
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
        {/*
          TODO
          <ServiceCardHeader
            serviceImages={serviceImages}
            serviceName={service.name}
            theme={theme}
          />
          <ServiceCardBody service={service} theme={theme} />
          <CardButton label="Select" onClick={handleSelectClick} theme={theme} />
        */}
      </div>
    </Card>
  );
};
