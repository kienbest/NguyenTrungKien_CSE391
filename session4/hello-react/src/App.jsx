import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let count =0;
  function handelClick(){
    count = count + 1;
    
    console.log ("count: ", count);
  }  
  return(
    <div>
      <h2> Bad counter</h2>
      <p>Bộ đếm : {count}</p>
      <button onClick={handleClick}>Tặngm(+1)</button>
    </div>
  )
}

export default App

// 1, File .jsx khác gì file .js?

// `.js`                                      | `.jsx`                          |
// | ------------------------------------------ | ------------------------------- |
// | Chứa JavaScript thuần                      | Chứa JavaScript + JSX           |
// | Không thường viết trực tiếp HTML bên trong | Có thể viết JSX giống HTML      |
// | Dùng cho logic JS thông thường             | Thường dùng cho React Component |

// 3. Thử xóa export default App → chuyện gì xảy ra?

// Ví dụ:

// function App() {
//   return <h1>Hello</h1>
// }

// Khi chạy:

// npm run dev

// React sẽ báo lỗi vì:

// import App from './App.jsx'

// đang cố lấy một giá trị mặc định (default export), nhưng file App.jsx không cung cấp.

// Lỗi thường gặp:

// The requested module '/src/App.jsx'
// does not provide an export named 'default'

// Hoặc:

// Failed to resolve import

// Kết quả:

// Trang web không hiển thị bình thường.
// Vite hiện màn hình lỗi màu đỏ.
// React không render được component App.

// 2. Tại sao phải export default App?

// Vì component App cần được sử dụng ở file khác.

// Trong project React của bạn, file:

// src/main.jsx

// có đoạn:

// import App from './App.jsx'

// Dòng này yêu cầu file App.jsx phải xuất (export) ra một component tên App.

// Do đó cuối file phải có:

// export default App

// để cho phép file khác import và sử dụng.

// bài 1.1 Trả lời câu hỏi
// Tại sao component chỉ render 1 lần?

// Vì sau khi React hiển thị giao diện lần đầu:

// App()
// ↓
// return JSX
// ↓
// Hiển thị lên màn hình

// không có dữ liệu nào thay đổi.

// Nên React không cần gọi lại App.

// Khi nào render lại?

// Khi:

// setState(...)

// được gọi.

// Ví dụ:

// setCount(5)

// React sẽ:

// setCount
// ↓
// Re-render
// ↓
// App() chạy lại
// ↓
// JSX mới
// ↓
// UI cập nhật