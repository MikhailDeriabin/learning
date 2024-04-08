#ifndef FIXED_SIZE_QUEUE_H
#define FIXED_SIZE_QUEUE_H

#include <queue>
#include <deque>

template <typename T, typename Container = std::deque<T>>
class FixedSizeQueue : public std::queue<T, Container>{
private:
    int maxSize = 3;
public:
	inline void push(T& elem){
        if (this->size() == maxSize)
            this->c.pop_front();

        std::queue<T, Container>::push(elem);
    }
    void setSize(int size) {
        if (size > 0)
            maxSize = size;
    }
};

#endif