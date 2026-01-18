import { Brain, Code, Filter, GitBranch, GitMerge, LogIn, LogOut, MessageSquare, Sigma } from "lucide-react"

export const getNodeIcon = (type, size) => {
    switch(type) {
        case "Input": 
        return <LogIn size={size==='sm' ? '16' : '22'} />;
        case "LLM":
        return <Brain size={size==='sm' ? '16' : '22'} />;
        case "Text":
        return <MessageSquare size={size==='sm' ? '16' : '22'} />;
        case "Output":
        return <LogOut size={size==='sm' ? '16' : '22'} />;
        case "Transform":
        return <Code size={size==='sm' ? '16' : '22'} />;
        case "Conditional":
        return <GitBranch size={size==='sm' ? '16' : '22'} />;
        case "Math":
        return <Sigma size={size==='sm' ? '16' : '22'} />;
        case "Filter":
        return <Filter size={size==='sm' ? '16' : '22'} />;
        case "Join":
        return <GitMerge size={size==='sm' ? '16' : '22'} />;
        default: 
        return <LogIn size={size==='sm' ? '16' : '22'} />;
    }
}