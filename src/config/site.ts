export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export const siteConfig = {
  title: "曹灿杯朗诵展示活动",
  description: "青少年语言艺术展示与成长的专业平台",
  brandTitle: "曹灿杯朗诵展示活动",
  brandLogo: "/assets/brand-logo.png",
  heroBanner: "/assets/hero-banner.jpg",
  navigation: [
    { label: "首页", href: "#home", active: true },
    { label: "活动介绍", href: "#about" },
    { label: "活动流程", href: "#process" },
    { label: "服务入口", href: "#services" },
    { label: "精彩瞬间", href: "#gallery" },
    { label: "通知公告", href: "#notice" },
    { label: "加入我们", href: "#join" },
    { label: "联系我们", href: "#contact" }
  ] satisfies NavItem[],
  footer: {
    organizer: "北京曹灿文化发展有限公司",
    icp: "京ICP备12345678号-1",
    copyright: "© 2025 曹灿杯朗诵展示活动 版权所有"
  }
};
