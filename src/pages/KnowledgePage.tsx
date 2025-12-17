import { Link } from "react-router-dom";
import { ArrowRight, Brain, AlertCircle, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout } from "@/components/layout/Layout";
import { faqData } from "@/data/faq";

export default function KnowledgePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Kiến thức về <span className="text-gradient">ADHD</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Hiểu đúng về ADHD để đồng hành và hỗ trợ con tốt hơn
            </p>
          </div>
        </div>
      </section>

      {/* What is ADHD */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="card-elevated mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">ADHD là gì?</h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed mb-4">
                  ADHD là viết tắt của <em>Attention Deficit Hyperactivity Disorder</em>, 
                  thường gọi là <strong>Rối loạn Tăng động Giảm chú ý</strong>.
                </p>

                <p className="text-foreground leading-relaxed mb-4">
                  ADHD là một <strong>dạng phát triển khác biệt của não bộ</strong>, 
                  trong đó trẻ có thể gặp khó khăn với:
                </p>

                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tập trung chú ý</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Kiểm soát hành vi bốc đồng</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Hoặc quá hiếu động so với các bạn cùng tuổi</span>
                  </li>
                </ul>

                <div className="bg-secondary/50 rounded-xl p-6">
                  <p className="text-foreground font-medium">
                    Điều quan trọng cần hiểu: ADHD <strong>không phải do trẻ hư</strong>, 
                    <strong> không phải lỗi của cha mẹ</strong>, và <strong>không phải khuyết điểm</strong>. 
                    Trẻ ADHD hoàn toàn có thể phát triển tốt nếu được hiểu đúng và hỗ trợ phù hợp.
                  </p>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div id="video" className="card-elevated mb-8">
              <h3 className="text-xl font-bold mb-4">🎬 Video giải thích ADHD</h3>
              <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/_jcUnne8sf4"
                  title="Video giải thích ADHD"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Signs by age */}
            <div id="dau-hieu" className="card-elevated mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold">Dấu hiệu ADHD theo độ tuổi</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-muted/50">
                  <h4 className="font-semibold mb-2">Khó tập trung</h4>
                  <p className="text-sm text-muted-foreground">
                    Dễ mất tập trung, quên việc, khó hoàn thành nhiệm vụ
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <h4 className="font-semibold mb-2">Hiếu động</h4>
                  <p className="text-sm text-muted-foreground">
                    Không ngồi yên, chạy nhảy nhiều, nói nhiều
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <h4 className="font-semibold mb-2">Bốc đồng</h4>
                  <p className="text-sm text-muted-foreground">
                    Nói chen, khó chờ đợi, hành động không suy nghĩ
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <h4 className="font-semibold mb-2">Ảnh hưởng học tập & quan hệ</h4>
                  <p className="text-sm text-muted-foreground">
                    Khó khăn ở trường, với bạn bè và trong gia đình
                  </p>
                </div>
              </div>
            </div>

            {/* Causes */}
            <div className="card-elevated mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Nguyên nhân & Hiểu đúng – Hiểu sai</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-success/10 border border-success/30">
                  <span className="text-success text-xl">✓</span>
                  <p>ADHD liên quan đến <strong>cách não bộ vận hành</strong></p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-danger/10 border border-danger/30">
                  <span className="text-danger text-xl">✗</span>
                  <p>Không phải do nuôi dạy sai</p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-danger/10 border border-danger/30">
                  <span className="text-danger text-xl">✗</span>
                  <p>Không phải do "lười" hay "hư"</p>
                </div>
              </div>
            </div>

            {/* When to see expert */}
            <div id="chuyen-gia" className="card-elevated mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-warning" />
                </div>
                <h2 className="text-2xl font-bold">Khi nào cần gặp chuyên gia?</h2>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-warning/10 flex items-center justify-center text-warning">
                    1
                  </span>
                  <span>Hành vi kéo dài (từ 6 tháng trở lên)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-warning/10 flex items-center justify-center text-warning">
                    2
                  </span>
                  <span>Ảnh hưởng rõ đến học tập / quan hệ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-warning/10 flex items-center justify-center text-warning">
                    3
                  </span>
                  <span>Ba mẹ cảm thấy lo lắng kéo dài</span>
                </li>
              </ul>

              <div className="mt-6">
                <Link to="/tai-nguyen">
                  <Button variant="outline">
                    Xem địa chỉ chuyên gia
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div className="card-elevated">
              <h2 className="text-2xl font-bold mb-6">❓ Câu hỏi thường gặp</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-muted-foreground">
                        {faq.answer.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <p className="mt-6 text-sm text-muted-foreground text-center">
                ℹ️ Nội dung FAQ chỉ mang tính tham khảo, không thay thế cho chẩn đoán hoặc tư vấn y khoa chuyên môn.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
