export interface HeroAction {
  label: string;
  key: string;
  variant: "primary" | "secondary";
}

export interface NoticeItem {
  tag?: string;
  text: string;
  href: string;
  date?: string;
}

export interface ProcessStep {
  icon: string;
  title: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  linkKey: string;
}

export interface JoinItem {
  icon: string;
  title: string;
  description: string;
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
}

export const homeContent = {
  hero: {
    title: ["返璞归真", "道法自然"],
    subtitle: "青少年语言艺术展示与成长的专业平台",
    tags: ["传承文化", "展示风采", "提升自信", "成就未来"],
    actions: [
      { label: "立即报名", key: "signup", variant: "primary" },
      { label: "证书查询", key: "certificate", variant: "secondary" },
      { label: "观看直播", key: "live", variant: "secondary" },
      { label: "指导用书", key: "books", variant: "secondary" }
    ] satisfies HeroAction[]
  },
  about: {
    title: "活动介绍",
    body: "“曹灿杯”朗诵展示活动是面向全国青少年儿童的语言艺术展示平台，以提升青少年的语言表达能力、传承中华优秀传统文化、展现新时代青少年风采为宗旨。活动自创办以来，已成为深受社会、学校、家庭信赖的品牌活动。"
  },
  notices: {
    title: "通知公告",
    items: [
      {
        tag: "置顶",
        text: "第十二届“曹灿杯”报名攻略",
        href: "https://mp.weixin.qq.com/s/h8WDY1UdX_NLYT7RypHrbg"
      },
      {
        tag: "置顶",
        text: "第十二届“曹灿杯”总展示举办城市、时间发布",
        href: "https://mp.weixin.qq.com/s/PLBc3wOGagygVPQGGeYaKw"
      },
      {
        text: "朗诵学习的“3个不重要”和“6个很重要”",
        href: "https://mp.weixin.qq.com/s/3lVCC8uuAlhveCsHxGG4bw"
      },
      {
        text: "朗诵选材“5要”和“5不要”",
        href: "https://mp.weixin.qq.com/s/lRpDWGGrg2M4dA8c1EqirQ"
      },
      {
        text: "最靠谱的朗诵选材指南",
        href: "https://mp.weixin.qq.com/s/y8FjVb3RE8OQBCiJDr-YOg"
      }
    ] satisfies NoticeItem[]
  },
  process: {
    title: "活动流程",
    steps: [
      { icon: "✎", title: "01 活动报名" },
      { icon: "☁", title: "02 市级展示" },
      { icon: "★", title: "03 省级展示" },
      { icon: "▣", title: "04 全国展示" }
    ] satisfies ProcessStep[]
  },
  services: {
    title: "服务入口",
    items: [
      {
        icon: "人",
        title: "活动报名",
        description: "在线报名 便捷通道",
        linkKey: "signup"
      },
      {
        icon: "证",
        title: "证书查询",
        description: "证书验证 官方权威",
        linkKey: "certificate"
      },
      {
        icon: "▶",
        title: "直播入口",
        description: "活动直播 精彩不停",
        linkKey: "live"
      },
      {
        icon: "P",
        title: "指导用书",
        description: "官方教材 推荐阅读",
        linkKey: "books"
      }
    ] satisfies ServiceItem[]
  },
  gallery: {
    title: "精彩瞬间"
  },
  join: {
    title: "加入我们",
    heading: "携手同行，共育未来之星",
    description: "诚邀教育机构、学校、媒体及社会各界合作伙伴加入",
    items: [
      {
        icon: "❤",
        title: "合作机构",
        description: "邀请共学"
      },
      {
        icon: "▣",
        title: "校园合作",
        description: "活动共建"
      },
      {
        icon: "●",
        title: "媒体合作",
        description: "宣传传播"
      },
      {
        icon: "人",
        title: "志愿者招募",
        description: "伴梦成长"
      }
    ] satisfies JoinItem[]
  },
  contact: {
    title: "联系我们",
    items: [
      {
        icon: "⌂",
        label: "官方网站",
        value: "www.caocancup.com"
      },
      {
        icon: "✉",
        label: "官方邮箱",
        value: "service@caocancup.com"
      },
      {
        icon: "☎",
        label: "联系电话",
        value: "400-888-6580"
      },
      {
        icon: "◷",
        label: "工作时间",
        value: "周一至周日 9:00-18:00"
      }
    ] satisfies ContactItem[]
  }
};
