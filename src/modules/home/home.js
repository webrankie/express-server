export default function home(req, res) {
  res.status(200).json({
    name: 'PASV',
    componets: ['abx', 'ewer', 'tree'],
    we: true,
  });
}
