import React from "react";
import classNames from "classnames";
import { languages } from "../consts";
import { setLanguage } from "../redux/actions/list";
import { store } from "..";
import "../styles/sortPopup.scss";

interface State {
  visiblePopup: boolean;
  activeLang: string;
}

class SortPopup extends React.Component<{}, State> {
  private sortRef: any = React.createRef();
  constructor(props: {}) {
    super(props);
    this.state = {
      visiblePopup: false,
      activeLang: "ru",
    };
    this.toggleVisiblePopup = this.toggleVisiblePopup.bind(this);
    this.toggleLang = this.toggleLang.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  toggleVisiblePopup = () => {
    this.setState({ visiblePopup: !this.state.visiblePopup });
  };

  toggleLang = (value: string) => {
    this.setState({ activeLang: value, visiblePopup: false });
    store.dispatch(setLanguage(value));
  };

  handleOutsideClick = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(this.sortRef.current)) {
      this.setState({ visiblePopup: false });
    }
  };

  componentDidMount() {
    document.body.addEventListener("click", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.handleOutsideClick);
  }

  render() {
    const { visiblePopup, activeLang } = this.state;
    return (
      <div
        ref={this.sortRef}
        className="sort"
        onClick={this.toggleVisiblePopup}
      >
        <div className="nameSorting">{activeLang}</div>
        {visiblePopup && (
          <ul className={classNames("subSort")}>
            {languages?.map((item) => (
              <li
                key={item.id}
                onClick={() => this.toggleLang(item.value)}
                className={classNames({
                  activeSort: activeLang === item.value,
                })}
              >
                {item.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default SortPopup;
