import React, { useEffect, useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { getAllProduct } from '../product-admin/service/product.service';
import { getAllCategory } from '../category-admin/service/category.service';
import { getAllComment } from '../comment-admin/service/comment.service';
import { getAllUser } from '../user-admin/service/user.service';
import { getAllOrder } from '../order-admin/service/order.service';
import { Link } from 'react-router-dom';

const DashBoardAdmin = () => {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [supports, setSupports] = useState([]);
  const [vorchers, setVorchers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getAllProduct().then((res: any) => setProducts(res.data));
    getAllCategory().then((res: any) => setCategorys(res.data));
    getAllComment().then((res: any) => setComments(res.data));
    getAllUser().then((res: any) => setUsers(res.data));
    getAllOrder().then((res: any) => {
      const newOrder = res.data.filter((item: any) => item.orderStatus === 'đang chờ duyệt');
      setOrders(newOrder);
    });
  }, []);

  return (
    <div className="p-8">
      <div className="text-4xl font-semibold">DASHBOARD</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard 
          color="bg-yellow-500" 
          title="Sản Phẩm" 
          count={products.length}
          link = "/admin/product" 
        />
        <DashboardCard 
          color="bg-green-500" 
          title="Danh Mục Sản Phẩm" 
          count={categorys.length} 
          link = "/admin/category" 
        />
        <DashboardCard 
          color="bg-orange-500" 
          title="Bình Luận - Đánh Giá" 
          count={comments.length} 
          link = "/admin/comment"
        />
        <DashboardCard 
          color="bg-pink-500" 
          title="Thành Viên" 
          count={users.length} 
          link = "/admin/user"
        />
        <DashboardCard 
          color="bg-purple-500" 
          title="Danh Sách Liên Hệ" 
          count={supports.length} 
          link = "/admin/contact"
        />
        <DashboardCard 
          color="bg-rose-500" 
          title="Đơn Hàng Chưa Xử Lý" 
          count={orders.length} 
          link = "/admin/order"
        />
        <DashboardCard 
          color="bg-lime-500" 
          title="Khuyến mãi" 
          count={vorchers.length}
          link = "/admin/voucher"
        />
      </div>
    </div>
  );
};

const DashboardCard = ({ color, title, count, link }: { color: string; title: string; count: number; link:string }) => (
  <div className={`${color} mt-20 rounded-lg p-6 flex flex-col justify-between h-[150px] shadow-lg hover:shadow-xl transition-shadow duration-300`}>
  <div>
    <div className="text-6xl text-white font-semibold mb-4">{count}</div>
    <div className="text-white font-medium text-xl">{title}</div>
  </div>
  <Link to={link} className={`mt-4 ${color} rounded-lg text-white flex items-center justify-between bg-opacity-75 p-3 cursor-pointer hover:bg-opacity-90 transition-all duration-300`}>
      <span className="text-lg font-medium">Chi tiết</span>
      <BsFillArrowRightCircleFill className="text-2xl" />
    </Link>
</div>
);

export default DashBoardAdmin;
