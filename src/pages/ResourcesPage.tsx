import { ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { resourceCategories } from "@/data/resources";

export default function ResourcesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Tài nguyên <span className="text-gradient">tham khảo</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Video, kênh chuyên gia, cộng đồng, sách và địa chỉ hỗ trợ đáng tin cậy
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {resourceCategories.map((category, index) => (
              <div key={category.title} className="card-elevated mb-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </h2>

                <div className="space-y-3">
                  {category.resources.map((resource) => (
                    <a
                      key={resource.title}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                        {resource.description && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {resource.description}
                          </p>
                        )}
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Disclaimer */}
            <div className="bg-muted/50 rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground">
                ⚠️ <strong>Lưu ý:</strong> Nội dung mang tính tham khảo, không thay thế tư vấn chuyên môn. 
                Các liên kết mở ở tab mới và dẫn đến các nguồn bên ngoài.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
