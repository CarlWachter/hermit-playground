void seq_matmul(const float *a, const float *b, float *dest, size_t n);
void seq_matmulz(const float *a, const float *b, float *dest, size_t n);
void matmulz(const float *a, const float *b, float *dest, size_t n);
void matmul_strassen(const float *a, const float *b, float *dest, size_t n);
void rmatsum(const float *src, float *dest, size_t len);
void rmatsub(const float *src, float *dest, size_t len);
void rcopy(const float *src, float *dest, size_t len);