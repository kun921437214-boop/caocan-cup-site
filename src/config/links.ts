export type LinkType = "web" | "miniprogram" | "wechat_article" | "official_account";

export interface LinkItem {
  key: string;
  label: string;
  type: LinkType;
  href: string;
  qrImage: string;
  note: string;
  enabled: boolean;
  miniProgramPath?: string;
  miniProgramAppName?: string;
}

export const links: LinkItem[] = [
  {
    key: "signup",
    label: "立即报名",
    type: "miniprogram",
    href: "#小程序://博朗汇/s1K2itMuWdtfQgC",
    qrImage: "/assets/qr-signup.png",
    note: "优先尝试打开报名小程序页；若当前环境无法直接拉起，请使用微信扫码进入。",
    enabled: true,
    miniProgramPath: "pages/selectLevel1/index.html?types=1,2,4,5,6,7",
    miniProgramAppName: "曹灿杯报名小程序"
  },
  {
    key: "certificate",
    label: "证书查询",
    type: "miniprogram",
    href: "#小程序://博朗汇/s1K2itMuWdtfQgC",
    qrImage: "/assets/qr-certificate.png",
    note: "优先尝试打开证书查询小程序页；若当前环境无法直接拉起，请使用微信扫码进入。",
    enabled: true,
    miniProgramPath: "pages/certificateQuery/index.html",
    miniProgramAppName: "曹灿杯证书查询"
  },
  {
    key: "live",
    label: "观看直播",
    type: "web",
    href: "https://appkyc5g6to8677.h5.xiaoeknow.com/p/course/big_column/p_68673331e4b0694ca0d69b9e?isLogin=false",
    qrImage: "",
    note: "直播入口已配置，点击后将通过中转页自动跳转。",
    enabled: true
  },
  {
    key: "books",
    label: "指导用书",
    type: "web",
    href: "https://appkyc5g6to8677.h5.xiaoeknow.com/p/decorate/page/eyJpZCI6MzAyODcyNCwiY2hhbm5lbF9pZCI6IiJ9",
    qrImage: "",
    note: "指导用书入口已配置，点击后将通过中转页自动跳转。",
    enabled: true
  },
  {
    key: "official-account",
    label: "官方公众号",
    type: "official_account",
    href: "",
    qrImage: "/assets/official-account-qr.png",
    note: "请使用微信扫码关注公众号，获取更多活动资讯。",
    enabled: true
  },
  {
    key: "article",
    label: "公众号文章",
    type: "wechat_article",
    href: "",
    qrImage: "/assets/official-account-qr.png",
    note: "请使用微信扫码或长按识别二维码跳转至公众号查看更多精彩内容。",
    enabled: true
  },
  {
    key: "miniprogram",
    label: "官方小程序",
    type: "miniprogram",
    href: "",
    qrImage: "",
    note: "请使用微信扫码打开小程序，后续可替换真实小程序码。",
    enabled: true
  }
];

export const linksMap = Object.fromEntries(links.map((item) => [item.key, item])) as Record<string, LinkItem>;

export function getLinkByKey(key: string) {
  return linksMap[key];
}

export function getGoPath(key: string) {
  return `/go/${key}`;
}
