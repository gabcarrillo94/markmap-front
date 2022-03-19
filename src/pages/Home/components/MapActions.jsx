import { 
    AddButton,
    PinsList,
    PinsListH,
    PinsListB,
    RemoveAllButton,
    Buttons
} from '../styles';

const MapActions = ({ markerList, selectedMark, setOpenRemove, addPin, setOpenRemoveAll }) => {
  return(
    <>
      <PinsList>
        <PinsListH>
          <h3>Listagem de pontos</h3>
        </PinsListH>
        <PinsListB>
          {
            markerList.length > 0 && (
            <ul>
              {markerList.map((mark, i) => (  
                <li key={i}>
                  <h4><img src={process.env.PUBLIC_URL + '/Icones/Culture Icon.svg'} alt="pin"></img> {mark.title}</h4>
                  <p>Criado em: {mark.createdAt}</p>
                </li>
              ))}
            </ul>
            ) 
          }

          {
            markerList.length === 0 && <h3>Sem pontos de monitoramento para exibir no momento.</h3>
          }
        </PinsListB>
      </PinsList>
      
      <Buttons>
        <AddButton onClick={addPin}>
          <span>adicionar novo</span>
          <img src={process.env.PUBLIC_URL + '/Icones/Pin.svg'} alt="pin"></img>
        </AddButton>

        {
          selectedMark && (
          <RemoveAllButton onClick={() => setOpenRemove(true)}>
            <span>deletar pin</span>
            <img src={process.env.PUBLIC_URL + '/Icones/Trash.svg'} alt="pin"></img>
          </RemoveAllButton>
          ) 
        }

        {
          markerList.length > 0 && (
          <RemoveAllButton onClick={() => setOpenRemoveAll(true)}>
            <span>deletar todos</span>
            <img src={process.env.PUBLIC_URL + '/Icones/Trash.svg'} alt="pin"></img>
          </RemoveAllButton>
          ) 
        }
      </Buttons>
    </>
  )
};

export default MapActions;