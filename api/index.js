var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/placmedia/Sites/Nestjs/niaabc-patron/niaabc-patron-ui/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react5 = require("@remix-run/react");

// app/components/common/Header.tsx
var import_fi = require("react-icons/fi");
var import_ri = require("react-icons/ri");
var Header = () => {
  const homeLink = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-18 pb-1 bg-white fixed font-Cormorant border-b border-gray-300 || dark:bg-black/90 dark:md:bg-black/80 dark:border-gray-800 z-50"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between py-2 px-4 md:px-8"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "mt-2 h-10 w-10 bg-[url('../../assets/image/LogoDark.svg')] bg-contain || dark:bg-[url('../../assets/image/Logo.svg')] cursor-pointer",
    onClick: homeLink
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col text-center font-Roboto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-clip-text text-transparent bg-gradient-to-t from-pink-500 to-red-900 text-2xl font-bold"
  }, "PATRON"), /* @__PURE__ */ React.createElement("div", {
    className: "text-black font-normal text-[11px] md:text-xs || dark:text-white"
  }, "Nigeria Institute of Architects - Abuja Chapter")), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-x-1"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "text-black font-medium text-sm mt-4 hidden md:block || dark:text-white"
  }, "Sign in  ")), /* @__PURE__ */ React.createElement(import_fi.FiLogIn, {
    className: "text-black mt-4 md:mt-5 cursor-pointer text-[24px] md:text-sm hidden md:block || dark:text-white"
  }), /* @__PURE__ */ React.createElement(import_ri.RiMenuFill, {
    className: "text-black mt-4 md:mt-5 cursor-pointer text-[24px] md:text-sm md:hidden || dark:text-white"
  }))));
};

// app/components/common/Footer.tsx
var import_react4 = __toESM(require("react"));

// app/components/theme/ThemeToggle.tsx
var import_react3 = __toESM(require("react"));

// app/components/theme/Theme.tsx
var import_react2 = __toESM(require("react"));
var getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};
var ThemeContext = import_react2.default.createContext({});
var ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = import_react2.default.useState(getInitialTheme);
  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);
    localStorage.setItem("color-theme", rawTheme);
  };
  if (initialTheme) {
    rawSetTheme(initialTheme);
  }
  import_react2.default.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);
  return /* @__PURE__ */ import_react2.default.createElement(ThemeContext.Provider, {
    value: { theme, setTheme }
  }, children);
};

// app/components/theme/ThemeToggle.tsx
var import_bs = require("react-icons/bs");
var Toggle = () => {
  const { theme, setTheme } = import_react3.default.useContext(ThemeContext);
  const [browserTheme, setBrowserTheme] = import_react3.default.useState();
  import_react3.default.useEffect(() => {
    setBrowserTheme(theme);
  }, [theme, browserTheme]);
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex mt-8 cursor-pointer drop-shadow-lg",
    onClick: () => setTheme(browserTheme === "dark" ? "light" : "dark")
  }, browserTheme === "dark" ? /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(import_bs.BsFillSunFill, {
    size: 15,
    className: "text-white dark:text-gold text-lg mr-1.5 || transition duration-500 ease-in-out"
  }), /* @__PURE__ */ import_react3.default.createElement("p", {
    className: "text-[9px] font-bold mt-.5 text-gray-400 italic"
  }, "Light Mode")) : /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(import_bs.BsFillMoonStarsFill, {
    size: 14,
    className: "text-black dark:text-black text-lg cursor-pointer mr-1.5 || transition duration-500 ease-in-out"
  }), /* @__PURE__ */ import_react3.default.createElement("p", {
    className: "text-[9px] font-bold mt-.5 text-gray-600 italic"
  }, "Dark Mode")));
};
var ThemeToggle_default = Toggle;

// app/components/common/Footer.tsx
var Footer = () => {
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "w-full  bg-gradient-to-t from-gray-200 to-white bg-white z-30 relative || dark:bg-gradient-to-t dark:from-black dark:to-black"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex px-8 md:px-16 pt-16 justify-between"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex-col mt-3 md:mt-0"
  }, /* @__PURE__ */ import_react4.default.createElement("h1", {
    className: "font-medium uppercase font-Roboto text-2xl text-black || dark:text-white"
  }, "Patron", /* @__PURE__ */ import_react4.default.createElement("span", {
    className: "text-pink-900 underline underline-offset-4"
  }, ".")), /* @__PURE__ */ import_react4.default.createElement(ThemeToggle_default, null)), /* @__PURE__ */ import_react4.default.createElement("div", null, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-col gap-y-2 py-4"
  }, /* @__PURE__ */ import_react4.default.createElement("h1", {
    className: "font-medium uppercase font-Roboto text-xs text-black || dark:text-white"
  }, "Quick Links"), /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "https://dashboard.niaabujachapter.com/clients/index.php?route=register",
    className: "font-light capitalize font-Roboto text-[12px] text-black || dark:text-white"
  }, "Register"), /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "",
    className: "font-light capitalize font-Roboto text-[12px] text-black || dark:text-white"
  }, "Reach us"), /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "https://www.niaabujachapter.com/",
    className: "font-light capitalize font-Roboto text-[12px] text-black || dark:text-white"
  }, "About NIAABC")))), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex py-4 justify-center  border-t border-gray-300 || dark:border-gray-500"
  }, /* @__PURE__ */ import_react4.default.createElement("p", {
    className: "font-light capitalize font-Roboto text-xs text-black || dark:text-white"
  }, "Copyright \xA9 2022. Nigeria Institute of Architects - Abuja Chapter")));
};

// app/components/common/Layout.tsx
var Layout = ({ children }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", null, children), /* @__PURE__ */ React.createElement(Footer, null));
};

// app/styles/app.css
var app_default = "/build/_assets/app-27QMFEWZ.css";

// route:/Users/placmedia/Sites/Nestjs/niaabc-patron/niaabc-patron-ui/app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "NIAABC PATRON",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react5.Meta, null), /* @__PURE__ */ React.createElement(import_react5.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(ThemeProvider, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react5.Outlet, null), /* @__PURE__ */ React.createElement(import_react5.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react5.Scripts, null), /* @__PURE__ */ React.createElement(import_react5.LiveReload, null)))));
}

// route:/Users/placmedia/Sites/Nestjs/niaabc-patron/niaabc-patron-ui/app/routes/architects/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  GetArchitect: () => GetArchitect,
  default: () => Index,
  loader: () => loader
});
var import_react6 = require("@remix-run/react");
var import_axios = __toESM(require("axios"));
var imagePath = "https://dashboard.niaabujachapter.com/public/uploads/profile/";
async function GetArchitect(slug) {
  const { data } = await import_axios.default.get(process.env.API_URL + `/users/` + slug);
  return data;
}
var loader = async ({ params }) => {
  const response = await GetArchitect(params.slug);
  return response;
};
function Index() {
  const member = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-20 pb-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:flex-row w-[90%] md:w-[80%] justify-center gap-x-40 rounded-sm shadow-sm mx-auto bg-slate-50 pt-8 md:mt-12 pb-12 text-slate-600 || dark:bg-gray-900 dark:text-slate-300"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute px-1 mx-4 -mt-2 rotate-90 bg-pink-700 rounded-sm md:-mx-40"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-right text-white justify-end float-right text-[14px]"
  }, member.payment_status === "Paid" ? "PATRON" : null)), /* @__PURE__ */ React.createElement("img", {
    src: member.image === "" || member.image === null ? "../assets/image/profile-img.jpeg" : imagePath + member.image,
    className: "w-40 h-40 mx-auto mt-12 rounded-full shadow-md"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 text-sm text-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-bold"
  }, member.firstname, " ", member.lastname), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, member.lead_position), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, member.email), /* @__PURE__ */ React.createElement("a", {
    href: `tel:${member.phone}`
  }, /* @__PURE__ */ React.createElement("p", {
    className: "py-4 font-semibold text-gray-900 || dark:text-white "
  }, member.phone.length < 11 ? `${member.phone} Update required` : member.phone)))), /* @__PURE__ */ React.createElement("div", {
    className: "px-4 text-slate-600 mt-12 text-center md:text-left font-light || dark:text-slate-300"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-start mx-4 md:mx-0 md:justify-center gap-y-1"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-bold text-left"
  }, "Basic Information"), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-left"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm font-semibold text-left"
  }, "Fullname:"), " ", member.firstname, " ", member.lastname), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-left"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm font-semibold text-left"
  }, "Lead Position:"), " ", member.lead_position !== "" && member.lead_position !== null ? member.lead_position : "None", " "), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-left"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm font-semibold text-left"
  }, "Email:"), " ", member.email), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-left"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm font-semibold text-left"
  }, "Cadre: "), /* @__PURE__ */ React.createElement("span", {
    className: "text-sm text-left"
  }, JSON.parse(member.additional).nia ? JSON.parse(member.additional).nia : "Not Listed")), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-left"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-semibold text-left text-md"
  }, "Member DMN: "), /* @__PURE__ */ React.createElement("span", {
    className: "text-left text-md"
  }, member.dmn)), /* @__PURE__ */ React.createElement("h1", {
    className: "pt-8 pb-4 text-2xl font-bold text-left"
  }, "Additional Information"), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-left"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm font-semibold text-left"
  }, "Gender: "), JSON.parse(member.additional).gender ? JSON.parse(member.additional).gender : "Not Given"), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-left"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm font-semibold text-left"
  }, "Marital Status:"), " ", JSON.parse(member.additional).marital_status ? JSON.parse(member.additional).marital_status : "Not Given", " "), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-left"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm font-semibold text-left"
  }, "NIA Membership:"), " ", JSON.parse(member.additional).nia_member1 ? JSON.parse(member.additional).nia_member1 + JSON.parse(member.additional).nia_member2 + JSON.parse(member.additional).nia_member3 + JSON.parse(member.additional).nia_member4 + JSON.parse(member.additional).nia_member5 + JSON.parse(member.additional).nia_member6 : "Not Registered"), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-left"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm font-semibold text-left"
  }, "ARCON Membership: "), /* @__PURE__ */ React.createElement("span", {
    className: "text-sm text-left"
  }, JSON.parse(member.additional).arcon_member1 ? JSON.parse(member.additional).arcon_member1 + JSON.parse(member.additional).arcon_member2 + JSON.parse(member.additional).arcon_member3 + JSON.parse(member.additional).arcon_member4 + JSON.parse(member.additional).arcon_member5 : "Not Registered")), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-left"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm font-semibold text-left"
  }, "Financial Status: "), /* @__PURE__ */ React.createElement("span", {
    className: "text-sm text-left"
  }, member.payment_status == "Paid" ? /* @__PURE__ */ React.createElement("span", {
    className: "text-green-700"
  }, "Financial") : /* @__PURE__ */ React.createElement("span", {
    className: "text-pink-500"
  }, "Owing"))), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-left"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm font-semibold text-left"
  }, "Address: "), /* @__PURE__ */ React.createElement("span", {
    className: "text-sm text-left"
  }, JSON.parse(member.address).address1 ? JSON.parse(member.address).address1 : "Not Given")))))));
}

// route:/Users/placmedia/Sites/Nestjs/niaabc-patron/niaabc-patron-ui/app/routes/architects/index.tsx
var architects_exports = {};
__export(architects_exports, {
  Members: () => Members,
  default: () => index,
  loader: () => loader2
});
var import_react10 = require("@remix-run/react");
var import_axios2 = __toESM(require("axios"));

// app/components/pages/architects/Architects.tsx
var import_bi = require("react-icons/bi");

// app/components/pages/architects/MemberCard.tsx
var import_react7 = require("@remix-run/react");
var import_lodash = __toESM(require("lodash"));
var imagePath2 = "https://dashboard.niaabujachapter.com/public/uploads/profile/";
var MemberCard = ({ members }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, members && members.map((member) => /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: `/architects/${member.slug}`,
    key: member.id
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-[170px] h-[230px] md:h-[200px] md:w-[200px] rounded-md  mx-auto shadow-sm bg-gradient-to-tl from-white to-slate-50 || dark:bg-gradient-to-tl dark:from-gray-900 dark:to-slate-900 cursor-pointer hover:"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute px-1 bg-teal-700 rounded-sm"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-right text-white justify-end float-right text-[10px]"
  }, member.lead_position !== "" && member.lead_position !== null ? member.lead_position : null)), /* @__PURE__ */ React.createElement("div", {
    className: "absolute px-1 mx-32 mt-4 rotate-90 bg-pink-700 rounded-sm md:mx-40"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-right text-white justify-end float-right text-[10px]"
  }, member.payment_status === "Paid" ? "PATRON" : null))), /* @__PURE__ */ React.createElement("img", {
    src: member.image === "" || member.image === null ? "../assets/image/profile-img.jpeg" : imagePath2 + member.image,
    className: "w-20 h-20 mx-auto mt-4 rounded-full"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "px-4 text-slate-600 mt-4 text-center md:text-left font-light || dark:text-slate-300"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-xs capitalize"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-black || dark:text-white"
  }, "Name:"), " ", import_lodash.default.capitalize(member.firstname), " ", import_lodash.default.capitalize(member.lastname)), /* @__PURE__ */ React.createElement("p", {
    className: "text-xs"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-black || dark:text-white"
  }, "Cadre:"), " ", JSON.parse(member.additional).nia ? JSON.parse(member.additional).nia : "Not Listed"), /* @__PURE__ */ React.createElement("p", {
    className: "text-xs"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-black || dark:text-white"
  }, "DMN:"), " ", member.dmn), /* @__PURE__ */ React.createElement("p", {
    className: "text-xs"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-black || dark:text-white"
  }, "Financial Status:"), " ", member.payment_status === "Unpaid" ? /* @__PURE__ */ React.createElement("span", {
    className: "text-pink-600"
  }, "Owing") : /* @__PURE__ */ React.createElement("span", {
    className: "text-green-600"
  }, "Financial")))))));
};

// app/components/pages/architects/Architects.tsx
var import_lodash2 = __toESM(require("lodash"));
var import_ai = require("react-icons/ai");
var import_react9 = __toESM(require("react"));

// app/components/Button.tsx
var import_react8 = __toESM(require("react"));
var Button = ({ text, icon, type }) => {
  const [loading, setLoading] = import_react8.default.useState(false);
  return /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, type === "flat-gradient" ? /* @__PURE__ */ import_react8.default.createElement("button", {
    className: "flex text-center justify-center gap-x-1 bg-gradient-to-r from-pink-500 to-red-900 text-gray-100 py-1 text-sm font-normal mt-2 rounded-sm w-1/2 cursor-pointer || hover:bg-gradient-to-l hover:from-pink-900 hover:to-red-900"
  }, /* @__PURE__ */ import_react8.default.createElement("p", {
    className: "mt-1"
  }, text), " ", /* @__PURE__ */ import_react8.default.createElement("span", null, icon)) : type === "flat" ? /* @__PURE__ */ import_react8.default.createElement("button", {
    className: "flex text-center justify-center gap-x-1 bg-gray-900 text-white py-1 text-sm font-normal mt-2 rounded-sm w-1/2 cursor-pointer || hover:bg-gray-900 hover:text-white"
  }, /* @__PURE__ */ import_react8.default.createElement("p", {
    className: "mt-1"
  }, text), " ", /* @__PURE__ */ import_react8.default.createElement("span", null, icon)) : type === "rounded-gradient" ? /* @__PURE__ */ import_react8.default.createElement("button", {
    className: "w-full md:w-auto md:ml-auto mt-4 md:mt-0 bg-pink-900 bg-gradient-to-r from-pink-900 to-red-900 text-sm  text-white font-semibold py-2 px-4 rounded-full || hover:bg-gradient-to-l hover:from-pink-900 hover:to-red-900 "
  }, /* @__PURE__ */ import_react8.default.createElement("p", {
    className: "mt-1"
  }, text), " ", /* @__PURE__ */ import_react8.default.createElement("span", null, icon)) : type === "rounded" ? /* @__PURE__ */ import_react8.default.createElement("button", {
    className: "px-8 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-200"
  }, /* @__PURE__ */ import_react8.default.createElement("p", {
    className: "mt-1"
  }, text), " ", /* @__PURE__ */ import_react8.default.createElement("span", null, icon)) : null);
};

// app/components/pages/architects/Architects.tsx
var Architects = ({ memberData }) => {
  const init = 0;
  const [endValue, setEndValue] = import_react9.default.useState(44);
  const countMembers = import_lodash2.default.size(memberData);
  const sortedMembers = import_lodash2.default.sortBy(memberData, ["dmn"]);
  const members = import_lodash2.default.slice(sortedMembers, init, endValue);
  const [buttonLoading, setButtonLoading] = import_react9.default.useState(false);
  const [patrons, setPatrons] = import_react9.default.useState(members);
  const handleLoadMore = (e) => {
    e.preventDefault();
    setButtonLoading(true);
    setTimeout(() => {
      setEndValue(endValue + 20);
      const updatedMembers = import_lodash2.default.slice(sortedMembers, init, endValue);
      setPatrons(updatedMembers);
      setButtonLoading(false);
    }, 1e3);
  };
  import_react9.default.useEffect(() => {
    setPatrons(members);
  }, [endValue]);
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "pb-16 pt-20 || dark:bg-black"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex px-8 gap-x-8 pb-12 bg-white || dark:bg-black"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "relative justify-start hidden w-1/4 h-full px-4 mx-auto text-center md:block"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "fixed w-1/4 mt-4 text-left"
  }, /* @__PURE__ */ import_react9.default.createElement("h1", {
    className: "text-sm text-black uppercase font-bold || dark:text-white"
  }, "Find Architects"), /* @__PURE__ */ import_react9.default.createElement("p", {
    className: "w-4/5 text-xs py-2 text-black font-light || dark:text-white"
  }, "Search architects using either full name, phone number or architect's DMN."), /* @__PURE__ */ import_react9.default.createElement("input", {
    type: "text",
    className: "w-4/5 mt-4 border border-gray-200 p-2 capitalize text-xs font- bg-transparent rounded-sm text-black || dark:text-white",
    placeholder: `Enter search term (Members Count: ${countMembers})`
  }), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "pt-2"
  }, /* @__PURE__ */ import_react9.default.createElement(Button, {
    type: "flat-gradient",
    text: "SEARCH",
    icon: /* @__PURE__ */ import_react9.default.createElement(import_bi.BiSearchAlt, {
      size: "25",
      className: "pt-1"
    })
  })), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "mt-12"
  }, /* @__PURE__ */ import_react9.default.createElement("h1", {
    className: "text-sm text-black uppercase font-bold mb-2 || dark:text-white"
  }, "News & Events"), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex flex-col overflow-auto h-72"
  }, News.map((article, index2) => /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex w-5/6 h-20 my-2 cursor-pointer",
    key: index2
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "w-[30%] pt-2"
  }, /* @__PURE__ */ import_react9.default.createElement("img", {
    src: article.image,
    className: "mr-2 rounded-sm w-14 h-14"
  })), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "w-full "
  }, /* @__PURE__ */ import_react9.default.createElement("h1", {
    className: "text-[10px] p-1 text-black font-bold || dark:text-white"
  }, article.title), /* @__PURE__ */ import_react9.default.createElement("p", {
    className: "text-[10px] p-1 -mt-2 text-slate-900 font-light || dark:text-slate-300"
  }, article.content)))))))), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "w-full h-full md:w-3/4 md:float-right md:justify-end"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "grid grid-cols-2 gap-4 mx-auto overflow-hidden auto-rows-max md:grid-cols-4"
  }, /* @__PURE__ */ import_react9.default.createElement(MemberCard, {
    members: patrons
  })), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "justify-center w-48 py-8 mx-auto text-center"
  }, buttonLoading ? /* @__PURE__ */ import_react9.default.createElement("button", {
    className: "px-4 py-2 mt-2 text-sm font-normal text-gray-100 bg-gray-500 rounded-sm",
    disabled: true,
    onClick: handleLoadMore
  }, /* @__PURE__ */ import_react9.default.createElement("span", {
    className: "flex"
  }, /* @__PURE__ */ import_react9.default.createElement(import_ai.AiOutlineLoading3Quarters, {
    className: "mt-1 font-bold animate-spin",
    size: 14
  }), /* @__PURE__ */ import_react9.default.createElement("p", {
    className: "ml-2"
  }, "Wait... "))) : /* @__PURE__ */ import_react9.default.createElement("button", {
    className: "bg-gray-900 text-gray-100  font-normal py-2 px-4 text-sm mt-2 bg-gradient-to-r from-pink-900 to-red-900 rounded-sm|| hover:bg-gradient-to-l hover:from-pink-900 hover:to-red-900",
    onClick: handleLoadMore
  }, "Load more")))));
};
var News = [
  {
    title: "The new NIAABC has been approved by the Ministry of Education",
    content: "The new NIAABC has been approved by the Ministry of Education coming home to the town.",
    image: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"
  },
  {
    title: "The new NIAABC has been approved by the Ministry of Education",
    content: "The new NIAABC has been approved by the Ministry of Education coming home to the town.",
    image: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"
  },
  {
    title: "The new NIAABC has been approved by the Ministry of Education",
    content: "The new NIAABC has been approved by the Ministry of Education coming home to the town.",
    image: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"
  },
  {
    title: "The new NIAABC has been approved by the Ministry of Education",
    content: "The new NIAABC has been approved by the Ministry of Education coming home to the town.",
    image: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"
  },
  {
    title: "The new NIAABC has been approved by the Ministry of Education",
    content: "The new NIAABC has been approved by the Ministry of Education coming home to the town.",
    image: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"
  },
  {
    title: "The new NIAABC has been approved by the Ministry of Education",
    content: "The new NIAABC has been approved by the Ministry of Education coming home to the town.",
    image: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"
  }
];

// route:/Users/placmedia/Sites/Nestjs/niaabc-patron/niaabc-patron-ui/app/routes/architects/index.tsx
async function Members() {
  const { data } = await import_axios2.default.get(process.env.API_URL + "/users");
  return data;
}
var loader2 = async () => {
  const response = await Members();
  return response;
};
function index() {
  const memberData = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Architects, {
    memberData
  });
}

// route:/Users/placmedia/Sites/Nestjs/niaabc-patron/niaabc-patron-ui/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});

// app/components/pages/home/Find.tsx
var import_react11 = require("@remix-run/react");
var Find = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full mx-auto mt-16 h-[400px] bg-[url('../../assets/image/people.jpg')] "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-black/80 w-full h-[400px]"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8 md:px-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:flex-row mt-4 gap-x-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-40 text-center align-middle"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react11.Link, {
    to: "architects"
  }, /* @__PURE__ */ React.createElement(Button, {
    type: "rounded-gradient",
    text: "Find Architects"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm font-normal text-gray-300 pt-4"
  }, "Find architects within the fits of ", /* @__PURE__ */ React.createElement("b", null, "NIAABC"), " using either just phone number or architects DMN"))))))));
};

// app/components/pages/home/Hero.tsx
var import_io = require("react-icons/io");
var Hero = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full mx-auto h-full bg-[url('../../assets/image/structure.jpg')] bg-contain"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full pt-20 pb-16 bg-black/80"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto mt-20 text-center font-Roboto"
  }, /* @__PURE__ */ React.createElement("img", {
    src: `../assets/image/Logo.svg`,
    className: "h-24 mx-auto",
    alt: "logo"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-900 text-7xl md:text-9xl"
  }, "NIAABC PATRON")), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center py-8 font-light text-center text-white text-md gap-x-4"
  }, /* @__PURE__ */ React.createElement("span", null, "Verifiable "), /* @__PURE__ */ React.createElement(import_io.IoMdCheckmarkCircleOutline, {
    className: "mt-1 text-pink-500",
    size: 16
  }), /* @__PURE__ */ React.createElement("span", null, "Accountable"), /* @__PURE__ */ React.createElement(import_io.IoMdCheckmarkCircleOutline, {
    className: "mt-1 text-pink-500",
    size: 16
  }), /* @__PURE__ */ React.createElement("span", null, "Nigerian")), /* @__PURE__ */ React.createElement("div", {
    className: "py-8"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "px-8 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-200"
  }, "Get Started"))))));
};

// app/components/pages/home/Intro.tsx
var Intro = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full pb-16 mx-auto mt-16 bg-white || dark:bg-black"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8 md:px-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:flex-row mt-4 gap-x-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-3/5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "my-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-black font-bold text-3xl md:text-3xl uppercase || dark:text-white"
  }, "Be Recognised", /* @__PURE__ */ React.createElement("span", {
    className: "text-pink-500"
  }, "."))), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 font-light text-sm md:text-md dark:text-gray-300"
  }, "We remain true to the same principles on which Nigerian Institute of Architects (N.I.A) was founded since 1960: producing members that create superior designs, shaping our world, putting safety first & creating vast opportunities. In this way, we want you to be recognised for the quality of your works, social heirarchy and great contributions you've made and attributes to which the institution was founded.")), /* @__PURE__ */ React.createElement("div", {
    className: "my-12"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-black font-bold text-3xl md:text-3xl uppercase || dark:text-white"
  }, "Be Verified", /* @__PURE__ */ React.createElement("span", {
    className: "text-pink-500"
  }, "."))), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 font-light text-sm md:text-md dark:text-gray-300"
  }, "We remain true to the same principles on which Nigerian Institute of Architects (N.I.A) was founded since 1960: producing members that create superior designs, shaping our world, putting safety first & creating vast opportunities. In this way, we want you to be recognised for the quality of your works, social heirarchy and great contributions you've made and attributes to which the institution was founded.")), /* @__PURE__ */ React.createElement("div", {
    className: "my-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-black font-bold text-3xl md:text-3xl uppercase || dark:text-white"
  }, "Be Accountable", /* @__PURE__ */ React.createElement("span", {
    className: "text-pink-500"
  }, "."))), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 font-light text-sm md:text-md dark:text-gray-300"
  }, "We remain true to the same principles on which Nigerian Institute of Architects (N.I.A) was founded since 1960: producing members that create superior designs, shaping our world, putting safety first & creating vast opportunities. In this way, we want you to be recognised for the quality of your works, social heirarchy and great contributions you've made and attributes to which the institution was founded."))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-2/5 mt-12 md:mt-0"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "../assets/image/recognised.svg",
    alt: "Niaabc"
  })))));
};

// route:/Users/placmedia/Sites/Nestjs/niaabc-patron/niaabc-patron-ui/app/routes/index.tsx
function Index2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement(Intro, null), /* @__PURE__ */ React.createElement(Find, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "e5d70635", "entry": { "module": "/build/entry.client-LR2JYNNE.js", "imports": ["/build/_shared/chunk-HDUZ7ZCG.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-ZNQTPYF6.js", "imports": ["/build/_shared/chunk-SML65IPF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/architects/$slug": { "id": "routes/architects/$slug", "parentId": "root", "path": "architects/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/architects/$slug-A5TA43RD.js", "imports": ["/build/_shared/chunk-3ZMUD2XI.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/architects/index": { "id": "routes/architects/index", "parentId": "root", "path": "architects", "index": true, "caseSensitive": void 0, "module": "/build/routes/architects/index-3NXMSLK7.js", "imports": ["/build/_shared/chunk-3ZMUD2XI.js", "/build/_shared/chunk-R3NFRZHM.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-VTVYVSO3.js", "imports": ["/build/_shared/chunk-R3NFRZHM.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E5D70635.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/architects/$slug": {
    id: "routes/architects/$slug",
    parentId: "root",
    path: "architects/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/architects/index": {
    id: "routes/architects/index",
    parentId: "root",
    path: "architects",
    index: true,
    caseSensitive: void 0,
    module: architects_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
