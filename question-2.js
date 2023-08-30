const roles = [
  `transaction.create`,
  `transaction.update`, 
  `transaction.delete`,
  `transaction.read`, 
  `banner.create`,
  `banner.update`,
  `banner.delete`,
  `banner.read`,
]

const userRoles = [
  'transaction.delete',
  'transaction.read', 
  'banner.create',
  'banner.update',
]

const isUserAllowedToAccess = (rolesNeeded, rolesFromUser) => {
  //
  if (roles.length !== userRoles.length) {
    return false
  }
  let allRoles = 0
  for (let i = 0; i < roles.length; i++) {
    for (let j = 0; j < userRoles.length; j++) {
      if (roles[i] == userRoles[j]) {
        allRoles++;
        break;
      }
    }
  }
  if (allRoles == roles.length) {
    return true 
  } else {
    return false
  }
  //
}
console.log(isUserAllowedToAccess());