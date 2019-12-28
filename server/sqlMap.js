var sqlMap = {
  user: {
    // 添加用户
    reg: 'insert into user(userid,password,root) values(?,?,1)',
    login: 'select * from user where userid = ? and password = ?',
    select: 'select * from user where userid = ? and root=1'
    // select: 'select * from user where name like "%"?"%"'
  }
}

module.exports = sqlMap
