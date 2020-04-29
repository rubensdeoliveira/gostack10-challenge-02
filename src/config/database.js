module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'dbteste',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
