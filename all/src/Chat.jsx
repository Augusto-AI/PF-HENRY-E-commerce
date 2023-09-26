import React, { Component } from "react";

class Chat extends Component {
  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "13484d078b1b1bbce071f41bfe1b7ff09",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  render() {
    return <div>{/* Sohbet bileşenini buraya ekleyin */}</div>;
  }
}

export default Chat;
