import { Link } from "react-router-dom";
import { ArrowRight, Home, Heart, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const supportSections = [
  {
    icon: Home,
    title: "Thói quen – Môi trường",
    items: [
      "Thiết lập thời gian biểu cố định cho ăn, ngủ, học và chơi",
      "Tạo không gian học tập yên tĩnh, ít xao nhãng",
      "Sử dụng đồng hồ hoặc nhắc nhở để con theo dõi thời gian",
      "Đặt đồ dùng học tập ở vị trí cố định để dễ tìm",
      "Hạn chế tiếng ồn và thiết bị điện tử khi cần tập trung",
    ],
  },
  {
    icon: Heart,
    title: "Kỹ năng quản lý hành vi",
    items: [
      "Khen ngợi cụ thể khi con làm tốt (thay vì chỉ nói 'con giỏi')",
      "Chia nhỏ nhiệm vụ lớn thành các bước nhỏ dễ thực hiện",
      "Sử dụng hệ thống thưởng đơn giản (sticker, điểm tích lũy)",
      "Giữ bình tĩnh khi con mắc lỗi, hướng dẫn thay vì la mắng",
      "Dạy con nhận biết và gọi tên cảm xúc của mình",
      "Tạo 'góc bình tĩnh' cho con khi cần thời gian nghỉ ngơi",
    ],
  },
  {
    icon: BookOpen,
    title: "Học tập – Phối hợp với giáo viên",
    items: [
      "Trao đổi với giáo viên về đặc điểm và nhu cầu của con",
      "Yêu cầu cho con ngồi gần bảng hoặc gần giáo viên",
      "Chia bài tập thành các phần nhỏ với thời gian nghỉ ngắn",
      "Sử dụng công cụ hỗ trợ: checklist, lịch, nhắc nhở",
      "Khuyến khích con học qua các hoạt động thực hành",
      "Theo dõi sổ liên lạc và phối hợp nhất quán với nhà trường",
    ],
  },
  {
    icon: Users,
    title: "Hỗ trợ quan hệ xã hội",
    items: [
      "Dạy con các kỹ năng xã hội cơ bản (chào hỏi, lắng nghe, chờ đợi)",
      "Tạo cơ hội chơi với bạn trong nhóm nhỏ, có giám sát",
      "Thực hành các tình huống xã hội thông qua trò chơi đóng vai",
      "Khen ngợi khi con thể hiện hành vi xã hội tích cực",
      "Tránh so sánh con với trẻ khác",
    ],
  },
];

export default function SupportPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Hỗ trợ & Can thiệp <span className="text-gradient">tại nhà</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Các cách thực tiễn giúp ba mẹ đồng hành và hỗ trợ con hiệu quả ngay tại gia đình
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {supportSections.map((section, index) => (
              <div key={section.title} className="card-elevated mb-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">{section.title}</h2>
                </div>

                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-secondary-foreground">
                        ✓
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Disclaimer */}
            <div className="bg-muted/50 rounded-xl p-6 mb-8 text-center">
              <p className="text-sm text-muted-foreground">
                ℹ️ Các gợi ý trên chỉ mang tính tham khảo. Mỗi trẻ là khác nhau, 
                hãy điều chỉnh phù hợp với con mình và tham khảo ý kiến chuyên gia khi cần.
              </p>
            </div>

            {/* CTA */}
            <div className="card-elevated bg-gradient-to-br from-primary/5 to-accent/5 text-center">
              <h3 className="text-xl font-bold mb-4">Cần thêm tài nguyên?</h3>
              <p className="text-muted-foreground mb-6">
                Xem thêm video, sách, cộng đồng và địa chỉ chuyên gia hỗ trợ
              </p>
              <Link to="/tai-nguyen">
                <Button>
                  Xem tài nguyên tham khảo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
