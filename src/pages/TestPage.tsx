import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Layout } from "@/components/layout/Layout";
import { questions, answerOptions, calculateRiskLevel } from "@/data/questions";

type TestState = 'intro' | 'test' | 'complete';

export default function TestPage() {
  const navigate = useNavigate();
  const [state, setState] = useState<TestState>('intro');
  const [agreed, setAgreed] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleStart = () => {
    if (agreed) {
      setState('test');
    }
  };

  const handleAnswer = (value: number) => {
    setAnswers((prev) => ({ ...prev, [questions[currentQuestion].id]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else if (Object.keys(answers).length === questions.length) {
      // Calculate result and navigate
      const riskLevel = calculateRiskLevel(answers);
      navigate(`/ket-qua?level=${riskLevel}`);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const currentAnswer = answers[questions[currentQuestion]?.id];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const allAnswered = Object.keys(answers).length === questions.length;

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'attention':
        return 'Phần A – Khó tập trung';
      case 'hyperactive':
        return 'Phần B – Hiếu động / Bốc đồng';
      case 'impact':
        return 'Phần C – Ảnh hưởng đến cuộc sống';
      default:
        return '';
    }
  };

  return (
    <Layout>
      <div className="container-custom section-padding">
        <div className="max-w-2xl mx-auto">
          {state === 'intro' && (
            <div className="card-elevated animate-fade-in">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                  Bài test sàng lọc ADHD
                </h1>
              </div>

              <div className="bg-secondary/50 rounded-xl p-6 mb-6">
                <p className="text-foreground leading-relaxed">
                  Bài test này giúp ba mẹ <strong>đánh giá mức độ nguy cơ ADHD</strong> dựa trên 
                  hành vi của con trong <strong>6 tháng gần đây</strong>. Kết quả{" "}
                  <strong>không phải chẩn đoán y khoa</strong>.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 border border-border rounded-xl mb-6">
                <Checkbox
                  id="agree"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked === true)}
                  className="mt-0.5"
                />
                <label
                  htmlFor="agree"
                  className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
                >
                  Tôi đã hiểu rằng kết quả bài test chỉ mang tính tham khảo và không thay thế 
                  chẩn đoán hoặc tư vấn y khoa chuyên môn.
                </label>
              </div>

              <Button
                onClick={handleStart}
                disabled={!agreed}
                size="lg"
                className="w-full"
              >
                Bắt đầu làm bài test
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          )}

          {state === 'test' && (
            <div className="animate-fade-in">
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {getCategoryLabel(questions[currentQuestion].category)}
                  </span>
                  <span className="text-sm font-semibold">
                    {currentQuestion + 1}/{questions.length}
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Question Card */}
              <div className="card-elevated mb-6">
                <p className="text-lg md:text-xl font-medium leading-relaxed mb-8">
                  {questions[currentQuestion].text}
                </p>

                <div className="space-y-3">
                  {answerOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                        currentAnswer === option.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50 hover:bg-muted/50"
                      }`}
                    >
                      <span className="font-medium">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentQuestion === 0}
                  className="flex-1"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Trước
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={currentAnswer === undefined}
                  className="flex-1"
                >
                  {currentQuestion === questions.length - 1 ? (
                    allAnswered ? "Xem kết quả" : "Tiếp"
                  ) : (
                    "Tiếp"
                  )}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
