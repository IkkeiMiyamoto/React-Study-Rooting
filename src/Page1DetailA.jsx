import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  const history = useHistory();
  const onClickBach = () => history.goBack();
  console.log(state);
  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBach}>戻る</button>
    </div>
  );
};
