export interface Question {
  id: number;
  text: string;
  category: 'attention' | 'hyperactive' | 'impact';
}

export const questions: Question[] = [
  // Phần A – Khó tập trung (1–9)
  { id: 1, text: "Con dễ mắc lỗi do làm vội hoặc không chú ý khi làm bài tập hay việc được giao.", category: 'attention' },
  { id: 2, text: "Con gặp khó khăn trong việc tập trung vào bài học hoặc các hoạt động cần chú ý.", category: 'attention' },
  { id: 3, text: "Khi ba mẹ hoặc người lớn nói chuyện trực tiếp, con có vẻ như không lắng nghe.", category: 'attention' },
  { id: 4, text: "Con thường không làm theo hướng dẫn hoặc không hoàn thành việc đã bắt đầu.", category: 'attention' },
  { id: 5, text: "Con gặp khó khăn trong việc sắp xếp công việc, bài tập hoặc thời gian.", category: 'attention' },
  { id: 6, text: "Con né tránh hoặc không thích những việc cần suy nghĩ lâu (bài tập dài, đọc sách).", category: 'attention' },
  { id: 7, text: "Con hay làm mất đồ dùng cần thiết cho việc học hoặc sinh hoạt.", category: 'attention' },
  { id: 8, text: "Con rất dễ bị xao nhãng bởi tiếng ồn hoặc những thứ xung quanh.", category: 'attention' },
  { id: 9, text: "Con hay quên các việc hằng ngày.", category: 'attention' },

  // Phần B – Hiếu động / Bốc đồng (10–18)
  { id: 10, text: "Con hay cựa quậy tay chân hoặc không ngồi yên khi cần ngồi yên.", category: 'hyperactive' },
  { id: 11, text: "Con thường rời khỏi chỗ ngồi trong lớp học hoặc khi đang sinh hoạt.", category: 'hyperactive' },
  { id: 12, text: "Con chạy nhảy hoặc leo trèo quá mức trong những tình huống không phù hợp.", category: 'hyperactive' },
  { id: 13, text: "Con gặp khó khăn khi chơi hoặc làm việc một cách yên tĩnh.", category: 'hyperactive' },
  { id: 14, text: 'Con luôn "chân tay không ngừng nghỉ", như thể lúc nào cũng tràn năng lượng.', category: 'hyperactive' },
  { id: 15, text: "Con nói rất nhiều, ngay cả trong những tình huống cần yên lặng.", category: 'hyperactive' },
  { id: 16, text: "Con thường trả lời hoặc nói chen khi người khác chưa nói xong.", category: 'hyperactive' },
  { id: 17, text: "Con gặp khó khăn trong việc chờ đến lượt mình.", category: 'hyperactive' },
  { id: 18, text: "Con hay chen ngang hoặc làm gián đoạn khi người khác đang nói chuyện hoặc chơi.", category: 'hyperactive' },

  // Phần C – Ảnh hưởng đến cuộc sống (19–24)
  { id: 19, text: "Những hành vi trên ảnh hưởng đến việc học tập của con.", category: 'impact' },
  { id: 20, text: "Những hành vi trên gây khó khăn trong mối quan hệ với bạn bè.", category: 'impact' },
  { id: 21, text: "Những hành vi trên gây căng thẳng hoặc khó khăn trong gia đình.", category: 'impact' },
  { id: 22, text: "Các biểu hiện này xảy ra ở nhiều môi trường khác nhau (nhà và trường).", category: 'impact' },
  { id: 23, text: "Những biểu hiện này đã kéo dài từ 6 tháng trở lên.", category: 'impact' },
  { id: 24, text: "Ba mẹ cảm thấy lo lắng vì những hành vi này của con.", category: 'impact' },
];

export const answerOptions = [
  { value: 0, label: "Không bao giờ" },
  { value: 1, label: "Thỉnh thoảng" },
  { value: 2, label: "Thường xuyên" },
  { value: 3, label: "Rất thường xuyên" },
];

export type RiskLevel = 'low' | 'medium' | 'high';

export interface RiskResult {
  level: RiskLevel;
  title: string;
  message: string;
  description: string;
  recommendations: string[];
  actions: { label: string; link: string }[];
  color: string;
  icon: string;
}

export const riskResults: Record<RiskLevel, RiskResult> = {
  low: {
    level: 'low',
    title: "Nguy cơ THẤP",
    message: "Con bạn hiện có ít dấu hiệu liên quan đến ADHD.",
    description: "Các hành vi thường gặp ở trẻ ADHD chưa xuất hiện nhiều hoặc chưa ảnh hưởng rõ rệt đến việc học tập và sinh hoạt hằng ngày.",
    recommendations: [
      "Tìm hiểu thêm về ADHD để hiểu đúng và yên tâm hơn.",
      "Tiếp tục quan sát sự phát triển của con theo từng giai đoạn.",
      "Duy trì thói quen sinh hoạt, học tập và giao tiếp tích cực.",
    ],
    actions: [
      { label: "Tìm hiểu ADHD là gì", link: "/kien-thuc" },
      { label: "Xem video giải thích ADHD", link: "/kien-thuc#video" },
    ],
    color: "success",
    icon: "🟢",
  },
  medium: {
    level: 'medium',
    title: "Nguy cơ TRUNG BÌNH",
    message: "Con bạn có một số dấu hiệu cần được theo dõi thêm.",
    description: "Một số hành vi liên quan đến khó tập trung hoặc hiếu động xuất hiện với tần suất nhất định và có thể ảnh hưởng nhẹ đến việc học hoặc sinh hoạt.",
    recommendations: [
      "Tìm hiểu kỹ hơn về ADHD.",
      "Áp dụng các cách hỗ trợ và điều chỉnh thói quen tại nhà.",
      "Theo dõi sự thay đổi của hành vi theo thời gian.",
    ],
    actions: [
      { label: "Dấu hiệu ADHD theo độ tuổi", link: "/kien-thuc#dau-hieu" },
      { label: "Hỗ trợ tại nhà", link: "/ho-tro" },
    ],
    color: "warning",
    icon: "🟡",
  },
  high: {
    level: 'high',
    title: "Nguy cơ CAO",
    message: "Con bạn có nhiều dấu hiệu giống ADHD và cần được quan tâm nhiều hơn.",
    description: "Các hành vi liên quan đến khó tập trung, hiếu động hoặc bốc đồng xuất hiện khá thường xuyên và ảnh hưởng rõ hơn đến học tập hoặc cuộc sống hằng ngày.",
    recommendations: [
      "Tìm hiểu đầy đủ thông tin về ADHD.",
      "Áp dụng sớm các biện pháp hỗ trợ tại nhà và phối hợp với giáo viên.",
      "Cân nhắc trao đổi với chuyên gia giáo dục, tâm lý hoặc y tế nếu còn lo lắng.",
    ],
    actions: [
      { label: "ADHD là gì?", link: "/kien-thuc" },
      { label: "Khi nào cần gặp chuyên gia?", link: "/kien-thuc#chuyen-gia" },
      { label: "Hỗ trợ & can thiệp tại nhà", link: "/ho-tro" },
    ],
    color: "danger",
    icon: "🔴",
  },
};

export function calculateRiskLevel(answers: Record<number, number>): RiskLevel {
  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
  const maxScore = 24 * 3; // 24 questions * max 3 points each = 72

  const percentage = totalScore / maxScore;

  if (percentage < 0.33) return 'low';
  if (percentage < 0.66) return 'medium';
  return 'high';
}
