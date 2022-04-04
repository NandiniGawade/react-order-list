import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Fragment } from "react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import "./orders.css";


class Orders extends React.Component {
    state = {} as any;
    handleClick = (e: any) => {
        this.setState({ [e]: !this.state[e] });
    };

    componentDidMount(){
        fetch('./data/orders.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                list: data
            });
        })
        .catch(err => console.error(err))
    }

    render() {
        const items = this.state.list;
        return (
            <Fragment>
                <Header headerTitle="My Orders" count={10}/>
                    <div className="list-panel">
                        {items && items.list.map((list:any, index:number) => {
                            return (
                                <List
                                    key={list.id}
                                >
                                    {list.items.map((item:any) => {
                                        return (
                                            <div key={item.id}>
                                                {item.subitems != null ? (
                                                    <div key={item.id}>
                                                        <ListItem
                                                            button
                                                            key={item.id}
                                                            onClick={this.handleClick.bind(
                                                                this,
                                                                item.name
                                                            )}
                                                        >
                                                            <ListItemText
                                                                className="list-color"
                                                                primary={item.name}
                                                            />
                                                            <span className="list-color">{item.subitems.length}</span>
                                                            {this.state[item.name] ? (
                                                                <ExpandLess />
                                                            ) : (
                                                                <ExpandMore />
                                                            )}
                                                        </ListItem>
                                                        <Collapse
                                                            key={index}
                                                            component="li"
                                                            in={this.state[item.name]}
                                                            timeout="auto"
                                                            unmountOnExit
                                                        >
                                                            <List disablePadding>
                                                                {item.subitems.map(
                                                                    (sitem: any) => {
                                                                        return (
                                                                            <ListItem
                                                                                button
                                                                                key={
                                                                                    sitem.id
                                                                                }
                                                                            >
                                                                                <ListItemText
                                                                                    key={
                                                                                        sitem.id
                                                                                    }
                                                                                    primary={
                                                                                        sitem.name
                                                                                    }
                                                                                />
                                                                                <div className="item-count"><span className="order-count">1</span></div>
                                                                            </ListItem>
                                                                        );
                                                                    }
                                                                )}
                                                            </List>
                                                        </Collapse>{" "}
                                                    </div>
                                                ) : (
                                                    <ListItem
                                                        button
                                                        onClick={this.handleClick.bind(
                                                            this,
                                                            item.name
                                                        )}
                                                        key={item.id}
                                                    >
                                                        <ListItemText
                                                            primary={item.name}
                                                        />
                                                    </ListItem>
                                                )}
                                            </div>
                                        );
                                    })}
                                </List>
                            );
                        })}
                    </div>
                <Footer test-id="footer_id"/>
            </Fragment>
        );
    }
}

export default Orders;