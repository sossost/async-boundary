import "./App.css";
import AsyncBoundary from "./components/AsyncBoundary";
import {
  QueryClient,
  QueryClientProvider,
  useSuspenseQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ display: "flex", gap: "200px" }}>
        <AsyncBoundary>
          <ProductList />
        </AsyncBoundary>

        <AsyncBoundary>
          <ProductList2 />
        </AsyncBoundary>
      </div>
    </QueryClientProvider>
  );
}

function ProductList() {
  const { data: productData } = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: fetchProductList,
  });

  return (
    <div className="product-list">
      {(productData as string[]).map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </div>
  );
}

function ProductList2() {
  const { data: productData } = useSuspenseQuery({
    queryKey: ["products2"],
    queryFn: fetchProductList2,
  });

  return (
    <div className="product-list">
      {(productData as string[]).map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </div>
  );
}

const fetchProductList = async () => {
  const response = new Promise((resolve) => {
    setTimeout(() => {
      resolve(["product1", "product2", "product3", "product4", "product5"]);
    }, 3000);
  });
  return response;
};

const fetchProductList2 = async () => {
  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("데이터 페치 실패"));
    }, 3000);
  });
  return response;
};

export default App;
