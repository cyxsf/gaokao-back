var sqlMap = {
  user: {
    // 添加用户
    reg: 'insert into user(userid,password,root) values(?,?,1)',
    login: 'select * from user where userid = ? and password = ?',
    select: 'select * from user where userid = ? and root=1'
    // select: 'select * from user where name like "%"?"%"'
  },
  data: {
    select: 'select * from identity where exam = 0',
    upUser: 'update user set root = 2 where userid = ?',
    inSeni: 'insert into seniors(userid,name,school,major,year) values (?,?,?,?,?)',
    upIden: 'update identity set exam = ? where userid = ?'
  }
}

module.exports = sqlMap
