export interface Resource {
  title: string;
  description?: string;
  url: string;
  type: 'video' | 'channel' | 'community' | 'document' | 'clinic';
}

export interface ResourceCategory {
  title: string;
  icon: string;
  resources: Resource[];
}

export const resourceCategories: ResourceCategory[] = [
  {
    title: "Video YouTube",
    icon: "🎬",
    resources: [
      {
        title: "Video giải thích ADHD",
        description: "Video giải thích dễ hiểu về ADHD",
        url: "https://www.youtube.com/watch?v=_jcUnne8sf4",
        type: 'video',
      },
    ],
  },
  {
    title: "Kênh YouTube & TikTok chuyên gia",
    icon: "📺",
    resources: [
      {
        title: "Tú Anh – Happy Parenting",
        url: "https://www.youtube.com/@TuAnhNguyen",
        type: 'channel',
      },
      {
        title: "Dr Tracey Marks",
        url: "https://www.youtube.com/@DrTraceyMarks",
        type: 'channel',
      },
      {
        title: "Dr Amen",
        url: "https://www.youtube.com/@AmenClinic",
        type: 'channel',
      },
      {
        title: "Dr PSY Vietnam",
        url: "https://www.youtube.com/@drpsyvietnam",
        type: 'channel',
      },
      {
        title: "TikTok BS Nguyễn Trung Nghĩa (Vinmec)",
        url: "https://www.tiktok.com/@bs.nguyentrungnghia?lang=en",
        type: 'channel',
      },
    ],
  },
  {
    title: "Nhóm cộng đồng ADHD",
    icon: "👥",
    resources: [
      {
        title: "ADHD tích cực Parenting",
        url: "https://www.facebook.com/groups/1311002959884418",
        type: 'community',
      },
      {
        title: "ADHD tích cực",
        url: "https://www.facebook.com/groups/adhdtichcuc/",
        type: 'community',
      },
    ],
  },
  {
    title: "Sách / Tài liệu",
    icon: "📚",
    resources: [
      {
        title: "Tài liệu về ADHD (IACAPAP 2020)",
        description: "Tài liệu chuyên môn về ADHD bằng tiếng Việt",
        url: "https://www.iacapap.org/_Resources/Persistent/c2568d324b4e4ab601f87bb35d4404bb21b893d4/D.1-ADHD-2020-vi-Final.pdf",
        type: 'document',
      },
      {
        title: "Sách: Hiểu về ADHD",
        description: "New York Times Best Seller",
        url: "#",
        type: 'document',
      },
      {
        title: "Sách: Nuôi dạy trẻ mắc chứng rối loạn giảm chú ý ADHD",
        url: "#",
        type: 'document',
      },
    ],
  },
  {
    title: "Địa chỉ thăm khám & hỗ trợ chuyên môn",
    icon: "🏥",
    resources: [
      {
        title: "Viện tâm lý Việt Pháp",
        url: "https://tamlyvietphap.vn/",
        type: 'clinic',
      },
      {
        title: "Công ty nghiên cứu & tham vấn tâm lý Family",
        url: "https://tamlyfamily.com/",
        type: 'clinic',
      },
      {
        title: "TS. BS Trần Thị Hồng Thu",
        url: "https://www.facebook.com/profile.php?id=61573043311263",
        type: 'clinic',
      },
      {
        title: "Psychologist Trần Nhật Minh",
        url: "https://adhdtichcuc.com/",
        type: 'clinic',
      },
    ],
  },
];
