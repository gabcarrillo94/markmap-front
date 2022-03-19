import { useState, useEffect } from 'react';

import MapWrapper from './components/MapWrapper';
import MapActions from './components/MapActions';
import ModalRemove from  './components/ModalRemove';

import { 
  HomeWrapper,
  HomeContent,
  Nav
} from './styles';

const jsonUrl = process.env.REACT_APP_GEOJSON_URL;

const PageHome = () => {
  const [geoPol, setGeoPol]               = useState();
  const [map, setMap]                     = useState();
  const [markerIndex, setMarkerIndex]     = useState(1);
  const [markerList, setMarkerList]       = useState([]);
  const [selectedMark, setSelectedMark]   = useState(null);
  const [openRemoveAll, setOpenRemoveAll] = useState(false);
  const [openRemove, setOpenRemove]       = useState(false);

  useEffect(() => {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((data) => setGeoPol(data.features[0]));
  }, []);

  useEffect(() => {
    markerList.forEach(m => {
      m.setIcon(process.env.PUBLIC_URL + '/Icones/Regular=on, Move=off.svg');
    });

    if(selectedMark) {
      const mark = markerList.filter(m => m.id === selectedMark);
      mark[0].setIcon(process.env.PUBLIC_URL + '/Icones/Regular=off, Move=on.svg');
    }
  }, [selectedMark]);

  const addPin = () => {
    const now = new Date();
    const config = {
      id: markerIndex,
      title: `Ponto nº ${markerIndex}`,
      draggable:true,
      position: { lat: geoPol.geometry.coordinates[0][0][0], lng: geoPol.geometry.coordinates[0][0][1] },
      createdAt: `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()}`,
      icon: process.env.PUBLIC_URL + '/Icones/Regular=on, Move=off.svg'
    };

    const newMark = new window.google.maps.Marker({ ...config, map});

    newMark.addListener("click", () => {
      handleSelectMark(markerIndex)
    });

    newMark.addListener("dragstart", () => {
      handleSelectMark(markerIndex)
    });

    markerList.push(newMark);
    setMarkerIndex(markerIndex+1);
  }

  const handleMapClick = () => {
    setSelectedMark(null);
  }

  const handleSelectMark = (index) => {
    setSelectedMark(index);
  }

  const removeAll = () => {
    markerList.forEach(m => {
      m.setMap(null);
    });

    setMarkerList([]);
    setSelectedMark(null);
  }

  const removeSelected = () => {
    const mark = markerList.filter(m => m.id === selectedMark);

    mark[0].setMap(null);
    setMarkerList(markerList.filter(m => m.id !== selectedMark));
    setSelectedMark(null);
  }

  return(
    <HomeWrapper>
      <HomeContent>
        <Nav>
          <h1>Gestão de pontos no mapa</h1>
        </Nav>

        {
          geoPol && <MapWrapper geoPol={geoPol} map={map} setMap={setMap} handleMapClick={handleMapClick} />
        }

        <MapActions markerList={markerList} selectedMark={selectedMark} addPin={addPin} setOpenRemoveAll={setOpenRemoveAll} setOpenRemove={setOpenRemove} />

        {
          openRemoveAll && <ModalRemove title={'Excluir todos os pontos?'} removeAction={removeAll} closeAction={setOpenRemoveAll} />
        }

        {
          openRemove && <ModalRemove title={'Excluir ponto selecionado?'} removeAction={removeSelected} closeAction={setOpenRemove} />
        }
      </HomeContent>
    </HomeWrapper>
  )
};

export default PageHome;