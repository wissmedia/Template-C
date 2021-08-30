const appTitle = 'Paperon'

const index = (req, res) => {
  let navMenus = [
    { link: '/admin/qbank', icon: 'fas fa-warehouse', label: 'Bank Pertanyaan' },
    { link: '/admin/quesioner', icon: 'fas fa-newspaper', label: 'Kuesioner' },
    { link: '/admin/result', icon: 'fas fa-poll', label: 'Hasil' },
    { link: '/admin/setting', icon: 'fas fa-cogs', label: 'Pengaturan' },
  ]
  res.render('admin/index', { appTitle, navTitle: 'Admin Panel', navMenus })
}

module.exports = {
  index
}