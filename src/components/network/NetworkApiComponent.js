import { Children, cloneElement, isValidElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainApi from "./MainApi";
import { LoggedInAction } from "../../storage/redux/LoginAction";

const NetworkApiComponent = ({ children, innerRef }) => {
  const apiToken = useSelector((state) => state.LoginReducer.apiToken);
  const dispatch = useDispatch();

  const handleUnAuthorized = () => {
    console.log("UnAuthorized Session");
    dispatch(LoggedInAction(null, null));
  };

  const networkApiObject = new MainApi(apiToken, handleUnAuthorized);
  if (innerRef) {
    innerRef(networkApiObject);
  }
  const addNetworkApi = (children) => {
    return Children.map(children, (child) => {
      if (!isValidElement(child)) return null;

      return cloneElement(child, {
        ...child.props,
        children: addNetworkApi(child.props.children),
        networkApi: networkApiObject,
      });
    });
  };
  return addNetworkApi(children);
};
export default NetworkApiComponent;
