/**
 * [Enum] Type
 */
export const Type = {
    /**
     * ユーザー
     */
    USER: 'USER',

    /**
     * 組織
     */
    ORGANIZATION: 'ORGANIZATION'
}

/**
 * [Enum] Type
 */
export const getAllType = () => Object.values(Type)
/**
 * [Enum] Type
 */
export const getAllTypeKey = () => Object.keys(Type)
/**
 * [Enum] Type
 */
export const isType = (s) => Object.values(Type).includes(s)

/**
 * ユーザー
 */
export const isUser = (v) => v === Type.USER
/**
 * 組織
 */
export const isOrganization = (v) => v === Type.ORGANIZATION
