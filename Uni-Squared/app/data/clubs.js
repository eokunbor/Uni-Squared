export const CATEGORIES = ['Cultural', 'Greek Life', 'STEM', 'Arts', 'Sports', 'Service'];

const base = (id, name, category) => ({
  id: String(id),
  name,
  category,
  description: 'Weekly meetups, workshops, and events.',
});

export const MOCK_BY_CATEGORY = {
  Cultural:    [base(1,'International Club','Cultural'), base(2,'Spanish Society','Cultural'), base(3,'K-Pop Fans','Cultural')],
  'Greek Life':[base(4,'Alpha Beta','Greek Life'), base(5,'Delta Eta','Greek Life'), base(6,'Omega Phi','Greek Life')],
  STEM:        [base(7,'Robotics','STEM'), base(8,'AI Society','STEM'), base(9,'Cybersec','STEM')],
  Arts:        [base(10,'Photography','Arts'), base(11,'Choir','Arts'), base(12,'Theatre','Arts')],
  Sports:      [base(13,'Ultimate Frisbee','Sports'), base(14,'Running Club','Sports'), base(15,'Climbing','Sports')],
  Service:     [base(16,'Hearts for Homeless','Service'), base(17,'Clean City','Service'), base(18,'Tutoring','Service')],
};