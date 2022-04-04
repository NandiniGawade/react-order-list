import { FC } from "react";
import "./footer.css"
import TimelapseIcon from '@mui/icons-material/Timelapse';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const Footer: FC = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="icon-panel">
                    <TimelapseIcon/><br/>
                    <span>Timeslots</span>
                </div>
                <div className="icon-panel">
                    <ViewInArIcon/><br/>
                    <span>My Deliveries</span>
                </div>
                <div className="icon-panel">
                    <HelpOutlineIcon/><br/>
                    <span>Supports</span>
                </div>
                <div className="icon-panel">
                    <SettingsIcon/><br/>
                    <span>Settings</span>
                </div>
            </div>           
        </div>
    )
}