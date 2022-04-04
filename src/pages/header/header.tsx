import { FC } from "react";
import "./header.css"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from "react-router-dom";


type Props = {
    headerTitle: string;
    count?: number;
};

export const Header: FC<Props> = ({headerTitle, count}) => {

    const handleClick = () => {
        navigate("/");
    }
    const navigate = useNavigate();
    return (
        <header className="header">
          {headerTitle}
          <div className="header-container">
          {
              count && <div className="count"><span className="item">{count}</span></div>
          }
          <div onClick={handleClick} className="signOut"><ExitToAppIcon /></div>
          </div> 
        </header>
    )
}