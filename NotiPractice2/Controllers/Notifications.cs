using Microsoft.AspNetCore.Mvc;
using NotiPractice2.EF;

namespace NotiPractice2.Controllers
{
    public class NotificationsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public NotificationsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetUnread()
        {
            var notifications = _context.Notifications.Where(n => !n.IsRead).ToList();
            return Json(notifications);
        }

        
        public IActionResult MarkAsRead(int id)
        {
            var notification = _context.Notifications.Find(id);
            if (notification != null)
            {
                notification.IsRead = true;
                _context.SaveChanges();
            }
            return RedirectToAction("Index", "Home");
        }
    }

}
