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
    href: "",
    qrImage: "/assets/qr-signup.svg",
    note: "优先尝试打开报名小程序页；若当前环境无法直接拉起，请使用微信扫码进入。",
    enabled: true,
    miniProgramPath: "pages/selectLevel1/index.html?types=1,2,4,5,6,7",
    miniProgramAppName: "曹灿杯报名小程序"
  },
  {
    key: "certificate",
    label: "证书查询",
    type: "miniprogram",
    href: "",
    qrImage: "/assets/qr-certificate.svg",
    note: "优先尝试打开证书查询小程序页；若当前环境无法直接拉起，请使用微信扫码进入。",
    enabled: true,
    miniProgramPath: "pages/certificateQuery/index.html",
    miniProgramAppName: "曹灿杯证书查询"
  },
  {
    key: "live",
    label: "观看直播",
    type: "web",
    href: "",
    qrImage: "",
    note: "后续可替换为真实直播链接。",
    enabled: true
  },
  {
    key: "books",
    label: "指导用书",
    type: "web",
    href: "",
    qrImage: "",
    note: "后续可替换为真实用书购买或介绍页面链接。",
    enabled: true
  },
  {
    key: "official-account",
    label: "官方公众号",
    type: "official_account",
    href: "",
    qrImage: "",
    note: "请使用微信扫码关注公众号，后续可替换真实二维码与公众号名称。",
    enabled: true
  },
  {
    key: "article",
    label: "公众号文章",
    type: "wechat_article",
    href: "",
    qrImage: "",
    note: "请使用微信扫码或在微信内打开文章，后续可替换真实文章二维码或链接。",
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
