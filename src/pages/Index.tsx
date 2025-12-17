import { Link } from "react-router-dom";
import { ArrowRight, Brain, Heart, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const features = [
  {
    icon: Brain,
    title: "Đánh giá nguy cơ",
    description: "Bài test 24 câu hỏi giúp nhận biết các dấu hiệu ADHD ở trẻ",
  },
  {
    icon: BookOpen,
    title: "Kiến thức đầy đủ",
    description: "Hiểu đúng về ADHD, nguyên nhân và dấu hiệu theo độ tuổi",
  },
  {
    icon: Heart,
    title: "Hỗ trợ tại nhà",
    description: "Các cách hỗ trợ con hiệu quả ngay tại gia đình",
  },
  {
    icon: Users,
    title: "Tài nguyên tham khảo",
    description: "Video, sách, cộng đồng và địa chỉ chuyên gia uy tín",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container-custom section-padding relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
              Dành cho ba mẹ có con 7–12 tuổi
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-slide-up">
              Sàng lọc nguy cơ <span className="text-gradient">ADHD</span> cho trẻ 7–12 tuổi
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Bài test tham khảo giúp ba mẹ đánh giá nguy cơ ADHD và hiểu cách hỗ trợ con.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/lam-bai-test">
                <Button size="lg" className="btn-hero w-full sm:w-auto">
                  Bắt đầu bài test ADHD
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/kien-thuc">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Tìm hiểu về ADHD
                </Button>
              </Link>
            </div>

            <p className="mt-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
              ⚠️ Nội dung mang tính tham khảo, không thay thế chẩn đoán y khoa.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Website cung cấp gì?
            </h2>
            <p className="text-muted-foreground">
              Các công cụ và kiến thức giúp ba mẹ hiểu và hỗ trợ con tốt hơn
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-elevated hover:shadow-elevated transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="card-elevated bg-gradient-to-br from-primary/5 to-accent/5 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Sẵn sàng tìm hiểu thêm?
            </h2>
            <p className="text-muted-foreground mb-6">
              Chỉ mất khoảng 10-15 phút để hoàn thành bài test sàng lọc. 
              Kết quả sẽ giúp ba mẹ hiểu rõ hơn về con và có hướng hỗ trợ phù hợp.
            </p>
            <Link to="/lam-bai-test">
              <Button size="lg" className="btn-hero">
                Bắt đầu ngay
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
