import { useState } from "react";
import Script from "next/script";

import Footer from "./footer";
import Header from "./header";
import getCourseConfig from "../data/course";
import { Provider as HeaderProvider } from "../context/headerContext";
import { Provider as CourseInfoProvider } from "../context/courseInfoContext";

function Layout({ children }) {
  const courseInfo = getCourseConfig();
  const headerHook = useState({});
  return (
    <CourseInfoProvider value={courseInfo}>
      <HeaderProvider value={headerHook}>
        <div className="remix-app">
          <Header title={courseInfo.title} />
          <div className="content-container">
            <div className="main">{children}</div>
          </div>
          <Footer
            twitter={courseInfo.social.twitter}
            github={courseInfo.social.github}
            linkedin={courseInfo.social.linkedin}
          />
        </div>
        <Script src="https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js" />
      </HeaderProvider>
    </CourseInfoProvider>
  );
}

export default function App({ children }) {
  return <Layout>{children}</Layout>;
}
