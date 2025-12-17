import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="container-custom py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                A
              </div>
              <span className="font-semibold">Sàng lọc ADHD</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Hỗ trợ ba mẹ đánh giá nguy cơ ADHD ở trẻ 7–12 tuổi và cung cấp kiến thức hữu ích.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liên kết</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Trang chủ
              </Link>
              <Link to="/lam-bai-test" className="text-muted-foreground hover:text-foreground transition-colors">
                Làm bài test
              </Link>
              <Link to="/kien-thuc" className="text-muted-foreground hover:text-foreground transition-colors">
                Kiến thức ADHD
              </Link>
              <Link to="/ho-tro" className="text-muted-foreground hover:text-foreground transition-colors">
                Hỗ trợ tại nhà
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Lưu ý quan trọng</h4>
            <p className="text-sm text-muted-foreground">
              Nội dung trên website chỉ mang tính tham khảo, không thay thế chẩn đoán hoặc tư vấn y khoa chuyên môn.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2024 Sàng lọc ADHD. Dành cho ba mẹ có con 7–12 tuổi.</p>
        </div>
      </div>
    </footer>
  );
}
