type MockerFunction = (...args: any[]) => any;

export function getMockHandler(name?: string, contextName?: string): MockerFunction {
    return function (...args: any): any{
        console.error(`${contextName ?? 'Context'} and ${name+'()' ?? 'that'} function are not available here`);
        return;
    }
}

type ContentFuncName<S, C> = keyof Omit<C, keyof S>;
type ContentFunc = null | MockerFunction;
type ContentFuncObj<S, C> = Record<ContentFuncName<S, C>, ContentFunc>;
export function generateInitStateAndContent<TState={}, TContent={}>(
    contextName: string,
    state: TState,
    functions: ContentFuncObj<TState, TContent>
): [TState, TContent]{
    const contentFunctions: Partial<ContentFuncObj<TState, TContent>> = {};
    for(let funcName in functions){
        const parsedName = funcName as keyof Omit<TContent, keyof TState>;
        const func = functions[parsedName];
        if(func){
            contentFunctions[parsedName] = func;
            continue;
        }
        contentFunctions[parsedName] = getMockHandler(funcName, contextName);
    }

    const content = {...state, ...contentFunctions} as TContent;

    return [state, content];
}

export function defaultReducer<TState=any>(state: TState, actionName?: string): TState {
    console.error(`Warning: Called action ${actionName ?? ''} is not implemented or there are such action defined`);
    return state;
}
