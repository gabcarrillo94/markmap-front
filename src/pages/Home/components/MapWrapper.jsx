import { Wrapper } from "@googlemaps/react-wrapper";

import Map from './Map';

const apiKey = process.env.REACT_APP_API_KEY;

const MapWrapper = (props) => {
  return(
    <Wrapper apiKey={apiKey}>
      <Map {...props} />
    </Wrapper>
  )
};

export default MapWrapper;