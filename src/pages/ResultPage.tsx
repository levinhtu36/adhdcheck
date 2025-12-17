import { useSearchParams, Link } from "react-router-dom";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { riskResults, RiskLevel } from "@/data/questions";

export default function ResultPage() {
  const [searchParams] = useSearchParams();
  const level = (searchParams.get("level") as RiskLevel) || "low";
  const result = riskResults[level];

  const colorClasses = {
    success: {
      bg: "bg-success/10",
      text: "text-success",
      border: "border-success/30",
    },
    warning: {
      bg: "bg-warning/10",
      text: "text-warning",
      border: "border-warning/30",
    },
    danger: {
      bg: "bg-danger/10",
      text: "text-danger",
      border: "border-danger/30",
    },
  };

  const colors = colorClasses[result.color as keyof typeof colorClasses];

  return (
    <Layout>
      <div className="container-custom section-padding">
        <div className="max-w-2xl mx-auto">
          {/* Result Card */}
          <div className="card-elevated animate-scale-in mb-8">
            <div className="text-center mb-8">
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${colors.bg} text-5xl mb-4`}
              >
                {result.icon}
              </div>
              <h1 className={`text-2xl md:text-3xl font-bold ${colors.text} mb-2`}>
                {result.title}
              </h1>
              <p className="text-lg font-medium">{result.message}</p>
            </div>

            <div className={`p-6 rounded-xl ${colors.bg} border ${colors.border} mb-6`}>
              <p className="text-foreground leading-relaxed">{result.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-4">Khuyến nghị cho ba mẹ:</h3>
              <ul className="space-y-3">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Hành động gợi ý:</h3>
              <div className="flex flex-wrap gap-3">
                {result.actions.map((action) => (
                  <Link key={action.label} to={action.link}>
                    <Button variant="outline" size="sm">
                      {action.label}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-muted/50 rounded-xl p-6 mb-8 text-center">
            <p className="text-sm text-muted-foreground">
              ⚠️ <strong>Lưu ý quan trọng:</strong> Kết quả chỉ mang tính tham khảo, 
              không thay thế chẩn đoán y khoa.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lam-bai-test">
              <Button variant="outline" className="w-full sm:w-auto">
                <RotateCcw className="w-5 h-5" />
                Làm lại bài test
              </Button>
            </Link>
            <Link to="/kien-thuc">
              <Button className="w-full sm:w-auto">
                Tìm hiểu về ADHD
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
